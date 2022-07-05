<script context="module">
    export const prerender = "true"
</script>
<script>
    let projectId
    let studioId
    async function redirect() {
        window.location.href = `/project/${projectId}`;
    }
    async function redirectStudio() {
        window.location.href = `/studio/${studioId}`;
    }
</script>
<h1 class="text-orange-500 dark:text-orange-600 text-3xl text-center mb-2">Scratch Cloud Viewer</h1>
<div class="grid place-items-center">
<div class="grid grid-cols-1 place-items-center">
    <div class="grid place-items-center m-2">
        <div class="bg-gray-50 dark:bg-slate-800 dark:border-slate-700 rounded-[5px] p-2 border-2 border-gray-100 shadow-lg">
            <form class="m-2" on:submit|preventDefault={redirect}>
                <i class="text-center mb-2 text-gray-500 dark:text-white block">Go to project:</i>
                <label class="text-gray-500 inline dark:text-white" for="id">id:</label>
                <input id="id" class="border-orange-200 border-2 dark:text-white dark:bg-slate-900 active:border-orange-400 hover:border-orange-300 focus:border-orange-400 focus-visible:border-orange-400 active:outline-none focus:outline-none focus-visible:outline-none transition ease-in-out delay-75 invalid:border-red-500 rounded-[5px] p-[1px]" type="number" step="1" min=0 bind:value={projectId} placeholder="project id..." />
                <button class="inline bg-orange-500 dark:bg-orange-600 text-white transition ease-in-out px-2 hover:bg-white dark:hover:bg-slate-900 dark:hover:text-orange-600 dark:text-slate-900 hover:text-orange-500 rounded-[5px]" type="submit">Go</button>
            </form>
        </div>
    </div>
    <div class="grid place-items-center m-2">
        <div class="bg-gray-50 dark:bg-slate-800 rounded-[5px] p-2 border-2 border-gray-100 dark:border-slate-700 shadow-lg">
            <form class="m-2" on:submit|preventDefault={redirectStudio}>
                <i class="text-center mb-2 text-gray-500 block dark:text-white">Go to studio:</i>
                <label class="text-gray-500 dark:text-white inline" for="studio-id">id:</label>
                <input id="studio-id" class="border-orange-200 dark:bg-slate-900 dark:text-white border-2 active:border-orange-400 hover:border-orange-300 focus:border-orange-400 focus-visible:border-orange-400 active:outline-none focus:outline-none focus-visible:outline-none transition ease-in-out delay-75 invalid:border-red-500 rounded-[5px] p-[1px]" type="number" step="1" min=0 bind:value={studioId} placeholder="studio id..." />
                <button class="inline bg-orange-500 dark:bg-orange-600 text-white transition ease-in-out px-2 hover:bg-white dark:hover:bg-slate-900 dark:hover:text-orange-600 dark:text-slate-900 hover:text-orange-500 rounded-[5px]" type="submit">Go</button>
            </form>
        </div>
    </div>
</div>
</div>
<h2 class="text-center dark:text-orange-600 text-orange-500 text-lg mb-1">Featured studios</h2>
<div class="grid place-items-center w-full">
    <div class="bg-gray-50 dark:bg-slate-800 w-fit p-4 rounded-[5px] shadow-xl">
        <div class="bg-gray-100 dark:bg-slate-700 rounded-[5px] p-2 border-2 border-gray-100 dark:border-slate-600 shadow-lg">
            <h3 class="text-gray-500 dark:text-white">Griffpatch's Multiplayer Cloud Games</h3>
            <div class="grid place-items-center my-2">
                <a href="studio/539952" class="bg-orange-500 dark:bg-orange-600 text-white transition ease-in-out px-2 hover:bg-white dark:hover:bg-slate-900 dark:hover:text-orange-600 dark:text-slate-900 hover:text-orange-500 rounded-[5px]">View studio cloud data</a>
            </div>
            <div class="grid place-items-center my-2">
                <a href="https://scratch.mit.edu/studios/539952" class="bg-orange-500 dark:bg-orange-600 text-white transition ease-in-out px-2 hover:bg-white dark:hover:bg-slate-900 dark:hover:text-orange-600 dark:text-slate-900 hover:text-orange-500 rounded-[5px]">View studio on scratch</a>
            </div>
        </div>
        <a class="mt-1 text-center text-gray-500 hover:text-black transition ease-in-out delay-75 block dark:text-white dark:hover:text-slate-500" href="https://wasteof.money/@ee" target="_blank" rel="noopener noreferrer">Suggest a studio to be featured</a>
    </div>
</div>