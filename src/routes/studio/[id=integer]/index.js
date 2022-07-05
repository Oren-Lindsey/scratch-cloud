/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
    const id = await params.id
    try {
        const studiofetch = await fetch(`https://api.scratch.mit.edu/studios/${id}`)
        const studioData = await studiofetch.json()
        const projectsfetch = await fetch(`https://api.scratch.mit.edu/studios/${id}/projects`)
        const projects = await projectsfetch.json()
        let projectsData = []
        for (let i = 0; i < projects.length; i++) {
            const id = projects[i].id
            const currentProject = await getProjectCloud(id)
            projectsData.push({ 'id': projects[i].id, users: currentProject.users })
        }
        return {
            body: {
                info: studioData,
                projects: projects,
                users: projectsData
            }
        }
    } catch (e) {
        return {
            status: "404"
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