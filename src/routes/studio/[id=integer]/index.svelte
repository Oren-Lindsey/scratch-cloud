<script context="module">
    export const prerender = "true"
</script>
<script>
    export let info
    export let projects
    export let users
    function findUsers(id) {
        var result = users.find(obj => {
            return obj.id === id
        })
        return result
    }
</script>
<div class="grid place-items-center w-full">
    <div class="text-center">
        <h1 class="text-3xl text-orange-500 text-center">{info.title}</h1>
        <div class="grid place-items-center">
            <img class="rounded-[5px] shadow-xl m-2" src={info.image} alt="thumbnail" />
        </div>
        <a class="text-center text-gray-500 hover:text-black transition ease-in-out delay-75 block" target="_blank" rel="noopener noreferrer" href="https://scratch.mit.edu/studios/{info.id}" >View studio on Scratch</a>
    </div>
</div>
<div class="grid place-items-center w-full">
    <ul class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center w-full">
        {#each projects as project}
            <li class="bg-gray-100 rounded-[5px] grid place-items-center w-[85%] min-w-[85%] break-words max-w-[95%] p-4 m-4 shadow-lg border-gray-200 border-2">
                <div class="text-center content-center">
                    <h2 class="text-orange-500 text-xl mb-1">{project.title}</h2>
                    <i class="text-gray-500">ID: {project.id}</i>
                    <div class="grid place-items-center my-2">
                        <img src={project.image} alt={project.title} width=300/>
                        <a class="text-center text-gray-500 hover:text-black transition ease-in-out delay-75 block" href="/project/{project.id}">View project cloud data</a>
                        <a class="text-center text-gray-500 hover:text-black transition ease-in-out delay-75 block" target="_blank" rel="noopener noreferrer" href="https://scratch.mit.edu/projects/{project.id}">View project on Scratch</a>
                        <div class="rounded-[5px] p-2 bg-gray-200 shadow-md w-full m-1">
                            <h2 class="text-orange-500 text-lg">Users currently playing</h2>
                            {#if findUsers(project.id).users.length > 0}
                            {#each findUsers(project.id).users as user}
                                <a href="https://scratch.mit.edu/users/{user}"><code class="block">@{user}</code></a>
                            {/each}
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