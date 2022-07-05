<script context="module">
    export const prerender = "true"
</script>
<script>
    export let logs
    export let id
    let error = ""
    import { onMount } from "svelte"
    let update = 0
    async function updatePage() {
        try {
            logs = await getProjectLogs(id)
            update = update + 1
        } catch (e) {
            console.error(e)
            error = "couldn't update :("
        }
    }
    async function getProjectLogs(id) {
        const res = await fetch(
            `/project/${id}/logs/__data.json`
        );
        let json = await res.json();
        return json.logs;
    }
    onMount(() => {
        setInterval(() => {
            updatePage()
        }, 3000);
    })
</script>
<h1 class="text-2xl text-orange-500 w-full text-center">Cloud logs - Project #{id}</h1>
<p class="text-center mb-1">{error}</p>
<p class="text-center text-xs text-gray-500">Updates automatically</p>
<div class="grid place-items-center">
    <div class="grid place-items-center">
        <div class="text-center mt-4 bg-gray-50 m-2 p-4 rounded-[5px] border-gray-100 border-2 max-w-[95%] overflow-scroll">
            <table>
                <div>
                    <thead>
                        <th>Date and Time</th><th>Username</th><th>Action</th><th>Var Name</th><th>Value</th>
                    </thead>
                    <tbody class="overflow-scroll">
                    {#key update}
                        {#each logs as log}
                            <tr>
                                <td class="mx-1"><code>{new Date(log.timestamp).toLocaleString()}</code></td><td class="mx-1"><code class="mx-1"><a class="text-orange-500" href="https://scratch.mit.edu/users/{log.user}">@{log.user}</a></code></td><td class="mx-1"><code class="mx-1">{log.verb}</code></td><td class="mx-1"><code class="mx-1">{log.name}</code></td><td class="mx-1"><code>{log.value}</code></td>
                                <br>
                            </tr>
                        {/each}
                    {/key}
                    </tbody>
                </div>
            </table>
        </div>
    </div>
</div>