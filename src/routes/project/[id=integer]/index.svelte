<script context="module">
    export const prerender = "true"
</script>
<script>
    export let cloud
    export let info
    export let pictures
    let error = ""
    import { onMount } from "svelte"
    let update = 0
    async function updatePage() {
        try {
            const data = await getProjectCloud(info.id)      
            cloud = data.cloud
            pictures = data.pictures
            update = update + 1
        } catch (e) {
            console.error(e)
            error = "couldn't update :("
        }
    }
    async function getProjectCloud(id) {
        const res = await fetch(
            `/project/${id}/__data.json`
        );
        let json = await res.json();
        return {'cloud':json.cloud, 'pictures':json.pictures}
    }
    onMount(() => {
        setInterval(() => {
            updatePage()
        }, 3000);
    })
</script>
<div class="grid place-items-center w-full">
    <div class="text-center">
        <h1 class="text-3xl text-orange-500 text-center">{info.title} by <a class="underline decoration-dotted hover:decoration-solid decoration-gray-500" target="_blank" rel="noopener noreferrer" href="https://scratch.mit.edu/users/{info.author.username}">@{info.author.username}</a></h1>
        <div class="grid place-items-center">
            <img class="rounded-[5px] shadow-xl m-2" src={info.image} alt="thumbnail" />
        </div>
        <a class="text-center text-gray-500 hover:text-black transition ease-in-out delay-75 block" target="_blank" rel="noopener noreferrer" href="https://scratch.mit.edu/projects/{info.id}" >View project on Scratch</a>
        <button class="bg-orange-500 p-1 rounded-[5px] text-white hover:bg-gray-200 hover:text-black transition ease-in-out delay-75 mt-2" on:click={updatePage}>Refresh</button>
        <p>{error}</p>
    </div>
</div>
<div class="grid">
    <div class="w-full grid place-items-center">
        <div class="grid place-items-center">
            <div class="text-center mt-4 bg-gray-50 p-4 rounded-[5px] border-gray-100 border-2 m-2">
                <h2 class="text-xl text-orange-500 w-full">Users Currently Online</h2>
                <p class="text-xs text-gray-500">Updates automatically</p>
                <ul class="grid place-items-center">
                    <div>
                        {#key update}
                            {#if cloud.users.length > 0}
                            {#each cloud.users as user, i}
                            <li class="my-2">
                                <img loading="lazy" class="inline" src={pictures[i]} alt={user} /><a class="inline underline decoration-dotted decoration-gray-500 m-1 font-mono" href="https://scratch.mit.edu/users/{user}" target="_blank" rel="noopener noreferrer"><p class="inline">@{user}</p></a><br>
                            </li>
                            {/each}
                            {:else}
                            <p class="text-gray-500">No one is playing right now :(</p>
                            {/if}
                        {/key}
                    </div>
                </ul>
            </div>
        </div>
    </div>
    <div class="grid place-items-center w-full">
        <a class="bg-orange-500 p-1 rounded-[5px] text-white hover:bg-gray-200 hover:text-black transition ease-in-out delay-75 mt-2 w-fit" href="/project/{info.id}/logs">View logs</a>
    </div>
</div>
