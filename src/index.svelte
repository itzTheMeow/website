<script lang="ts">
  import { Colors } from "Colors";
  import Navbar from "navbar/Navbar.svelte";
  import { Paths } from "Paths";
  import { Route, Router } from "svelte-routing";
  import { generateUltrablurCSS } from "ultrablur";
  import PageSplash from "./routes/splash/index.svelte";
  import PageBPMFinder from "./routes/tools/bpm-finder/index.svelte";

  export let url = "";
</script>

<div
  class="absolute top-0 left-0 w-full h-full blur-md"
  style:background={generateUltrablurCSS(Colors.background, "#000000", -70, 15)}
/>
<div class="flex flex-col overflow-x-hidden w-full h-full relative">
  <Navbar />
  <Router {url}>
    <Route path={Paths.Splash} component={PageSplash} />
    <Route path={Paths.ToolBPMFinder} component={PageBPMFinder} />
  </Router>
</div>
