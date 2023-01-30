<script lang="ts">
  import { onMount } from "svelte";
  import { Route, Router } from "svelte-routing";
  import PageSplash from "./routes/splash/index.svelte";

  let time = new Date().toLocaleTimeString();

  onMount(() => {
    setInterval(() => {
      time = new Date().toLocaleTimeString();
    }, 1000);
  });
</script>

<Router>
  <Route component={PageSplash} path="/" />
</Router>
