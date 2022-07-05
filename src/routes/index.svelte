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
<h1 class="text-orange-500 text-3xl text-center mb-2">Cloud games</h1>
<div class="grid place-items-center">
<div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 lg:w-[50%] xl:w-[40%] 2xl:w-[40%] sm:w-[60%] md:w-[60%] place-items-center">
    <div class="grid place-items-center m-2">
        <div class="bg-gray-50 rounded-[5px] p-2 border-2 border-gray-100 shadow-lg">
            <form class="m-2" on:submit|preventDefault={redirect}>
                <i class="text-center mb-2 text-gray-500 block">Go to project:</i>
                <label class="text-gray-500 inline" for="id">id:</label>
                <input id="id" class="border-orange-200 border-2 active:border-orange-400 hover:border-orange-300 focus:border-orange-400 focus-visible:border-orange-400 active:outline-none focus:outline-none focus-visible:outline-none transition ease-in-out delay-75 invalid:border-red-500 rounded-[5px] p-[1px]" type="number" step="1" min=0 bind:value={projectId} placeholder="project id..." />
                <button class="inline bg-orange-500 text-white transition ease-in-out px-2 hover:bg-white hover:text-orange-500 m-2 rounded-[5px]" type="submit">Go</button>
            </form>
        </div>
    </div>
    <div class="grid place-items-center m-2">
        <div class="bg-gray-50 rounded-[5px] p-2 border-2 border-gray-100 shadow-lg">
            <form class="m-2" on:submit|preventDefault={redirectStudio}>
                <i class="text-center mb-2 text-gray-500 block">Go to studio:</i>
                <label class="text-gray-500 inline" for="studio-id">id:</label>
                <input id="studio-id" class="border-orange-200 border-2 active:border-orange-400 hover:border-orange-300 focus:border-orange-400 focus-visible:border-orange-400 active:outline-none focus:outline-none focus-visible:outline-none transition ease-in-out delay-75 invalid:border-red-500 rounded-[5px] p-[1px]" type="number" step="1" min=0 bind:value={studioId} placeholder="studio id..." />
                <button class="inline bg-orange-500 text-white transition ease-in-out px-2 hover:bg-white hover:text-orange-500 m-2 rounded-[5px]" type="submit">Go</button>
            </form>
        </div>
    </div>
</div>
</div>