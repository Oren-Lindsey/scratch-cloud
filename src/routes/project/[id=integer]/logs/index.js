/** @type {import('./__types/[id]').RequestHandler} */
export async function get(event) {
    let cloud
    const id = event.params.id
    try {
        cloud = await getCloud(0, 200, id)
    } catch (e) {
        console.error(e)
        return {
            status: "404"
        }
    }
    return {
        status: '200',
        body: {
            logs: cloud,
            id: id
        }
    }
  }
async function getCloud(offset, limit, id) {
	const res = await fetch(
		`https://clouddata.scratch.mit.edu/logs?projectid=${id}&offset=${
			offset || 0
		}&limit=${limit || 100}`
	);
	let body;

	try {
		body = await res.json();
	} catch (ex) {
		body = [];
	}

	return body
};