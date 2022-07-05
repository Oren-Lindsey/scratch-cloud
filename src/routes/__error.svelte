<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ status }) {
      return {
        props: {
          title: `${status} error`
        }
      };
    }
  </script>
  
  <script>
    export let title;
  </script>
  
  <h1 class="w-full text-center text-orange-500 dark:text-orange-600 text-2xl">{title}</h1>