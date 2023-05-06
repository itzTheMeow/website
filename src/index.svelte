<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { Paths } from "Paths";
  import { ProjectID } from "Projects";
  import { ScreenWidth } from "State";
  import Navbar from "navbar/Navbar.svelte";
  import { Route, Router } from "svelte-routing";
  import PageProjectTradeHub from "./routes/projects/tradehub/index.svelte";
  import PageSplash from "./routes/splash/index.svelte";
  import PageBPMFinder from "./routes/tools/bpm-finder/index.svelte";

  export let url = "";
  export let isMobile = false;

  // Will refactor the SSR result based on User-Agent detection of mobile device.
  if (url) $ScreenWidth = isMobile ? 1 : Infinity;
</script>

<Background
  color={Colors.background}
  background="#000000"
  saturation={-70}
  intensity={15}
  page
  className="blur-md"
/>
<div class="flex flex-col overflow-hidden w-full h-full relative" style:color={Colors.text}>
  <Navbar />
  <Router {url}>
    <Route path={Paths.Splash} component={PageSplash} />
    <Route path={Paths.ToolBPMFinder} component={PageBPMFinder} />
    <Route path={Paths.Project$.replace("$", ProjectID.TradeHub)} component={PageProjectTradeHub} />
  </Router>
</div>
