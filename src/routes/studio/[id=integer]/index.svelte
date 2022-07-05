<script context="module">
    export const prerender = "true"
    import { page } from '$app/stores'
</script>
<script>
    export let info
    export let projects
    export let users
    let update = 0
    function findUsers(id) {
        var result = users.find(obj => {
            return obj.id === id
        })
        return result
    }
    async function updatePage() {
        const data = await fetch(`${$page.url.href}/__data.json`)
        const json = await data.json()
        info = json.info
        projects = json.projects
        users = json.users
        update = update + 1
    }
    setInterval(() => {
        updatePage()
    },10000)
</script>
<div class="grid place-items-center w-full">
    <div class="text-center">
        <h1 class="text-3xl text-orange-500 dark:text-orange-600 text-center">{info.title}</h1>
        <div class="grid place-items-center">
            <img class="rounded-[5px] shadow-xl m-2" src={info.image} alt="thumbnail" />
        </div>
        <a class="text-center text-gray-500 dark:text-white dark:hover:text-slate-500 hover:text-black transition ease-in-out delay-75 block" target="_blank" rel="noopener noreferrer" href="https://scratch.mit.edu/studios/{info.id}" >View studio on Scratch</a>
    </div>
</div>
<div class="grid place-items-center w-full">
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center w-full">
        {#each projects as project}
            <li class="bg-gray-100 dark:bg-slate-800 dark:border-slate-700 rounded-[5px] grid place-items-center w-[85%] min-w-[85%] break-words max-w-[95%] p-4 m-4 shadow-lg border-gray-200 border-2">
                <div class="text-center content-center">
                    <h2 class="text-orange-500 dark:text-orange-600 text-xl mb-1">{project.title}</h2>
                    <i class="text-gray-500 dark:text-slate-500">ID: {project.id}</i>
                    <div class="grid place-items-center my-2">
                        <img src={project.image} alt={project.title} width=300 class="shadow-xl rounded-[5px]" />
                        <a class="text-center text-gray-500 dark:text-white dark:hover:text-slate-500 hover:text-black transition ease-in-out delay-75 block" href="/project/{project.id}">View project cloud data</a>
                        <a class="text-center text-gray-500 dark:text-white dark:hover:text-slate-500 hover:text-black transition ease-in-out delay-75 block" target="_blank" rel="noopener noreferrer" href="https://scratch.mit.edu/projects/{project.id}">View project on Scratch</a>
                        <div class="rounded-[5px] p-2 bg-gray-200 dark:bg-slate-700 shadow-md w-full m-1">
                            <h2 class="text-orange-500 dark:text-orange-600 text-lg">Users currently playing</h2>
                            <p class="text-gray-500 dark:text-white text-xs mb-1">Updates automatically</p>
                            {#if findUsers(project.id).users.length > 0}
                            {#key update}
                            {#each findUsers(project.id).users as user}
                                <a href="https://scratch.mit.edu/users/{user}"><code class="block text-white underline decoration-dotted decoration-gray-500">@{user}</code></a>
                            {/each}
                            {/key}
                            {:else}
                            <p class="text-gray-500">No one is currently playing right now :(</p>
                            {/if}
                        </div>
                    </div>
                </div>
            </li>
        {/each}
        </ul>
</div>