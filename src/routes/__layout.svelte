<script>
    import "../app.css";
    let projectId = 0
    async function redirect() {
        window.location.href = `/project/${projectId}`;
    }
</script>
<nav class="bg-orange-500 shadow-xl w-screen fixed dark:bg-orange-600">
    <div class="grid place-items-center">
        <a class="text-white text-xl hover:text-orange-500 dark:hover:bg-slate-900 dark:hover:text-orange-600 hover:bg-white transition ease-in-out px-2 rounded-[5px] dark:text-slate-900" href="/">Home</a>
    </div>
    <div class="place-items-center grid">
        <form class="m-2" on:submit|preventDefault={redirect}>
            <p class="inline text-white dark:text-slate-900">Go to project:</p>
            <input class="border-orange-200 border-2 active:border-orange-400 hover:border-orange-300 focus:border-orange-400 focus-visible:border-orange-400 active:outline-none focus:outline-none focus-visible:outline-none transition ease-in-out delay-75 invalid:border-red-500 rounded-[5px] p-[1px] bg-white dark:bg-slate-800 text-black dark:text-white" type="number" step="1" min=0 bind:value={projectId} placeholder="project id..." />
            <button class="bg-orange-500 dark:bg-orange-600 text-white transition ease-in-out px-2 hover:bg-white dark:hover:bg-slate-900 dark:hover:text-orange-600 dark:text-slate-900 hover:text-orange-500 rounded-[5px]" type="submit">Go</button>
        </form>
    </div>
</nav>
<div class="w-screen h-[5.5rem] bg-white dark:bg-slate-900">
    &nbsp;
</div>
<div class="bg-white dark:bg-slate-900 min-h-screen min-w-screen h-full">
    <slot />
</div>