/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    let projectData
    let projectInfo
    const id = params.id
    if (id !== undefined && id !== 'undefined') {
        let pictures = new Set()
        let picturesArray = []
        try {
            projectData = await getProjectCloud(id)
            projectInfo = await getProjectInfo(id)
            const users = projectData.users
            for (let i = 0; i < users.length; i++) {
                const user = users[i]
                const userPicture = await getUserPicture(user)
                pictures.add(userPicture)
            }
            picturesArray = Array.from(pictures);
        } catch (e) {
            console.error(e)
            return {
                status: "404"
            }
        }
        if (projectInfo.code === 'NotFound') {
          return {
            status: '404'
          }  
        } else {
            return {
                status: '200',
                body: {
                    cloud: projectData,
                    info: projectInfo,
                    pictures: picturesArray,
                }
            }
        }
  } else {
    return {
        status: '301',
        headers: {
            Location: '/project/undefined/logs'
        }
    }
  }
}
async function getProjectCloud(id) {
    const res = await fetch(
        `https://clouddata.scratch.mit.edu/logs?projectid=${id}&limit=40&offset=0`
    );
    json = await res.json();
    const dateNow = Date.now();
    const usersSet = new Set();
    let projectObject = {}
    for (const varChange of json) {
        if (dateNow - varChange.timestamp > 60000) break;
        usersSet.add(varChange.user);
    }
    projectObject.timestamp = json[0]?.timestamp || 0;
    projectObject.amt = usersSet.size;
    projectObject.users = Array.from(usersSet);
    return projectObject;
}
async function getProjectInfo(id) {
    const res = await fetch(
        `https://api.scratch.mit.edu/projects/${id}`
    );
    json = await res.json();
    return json;
}
async function getUserPicture(name) {
    const res = await fetch(
        `https://api.scratch.mit.edu/users/${name}`
    );
    let json = await res.json();
    const images = Object.values(json.profile.images)
    return images[4]
}