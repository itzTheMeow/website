<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { Paths } from "Paths";
  import { ProjectID } from "Projects";
  import { ScreenWidth } from "State";
  import Navbar from "navbar/Navbar.svelte";
  import { Route, Router } from "svelte-routing";
  import PageProjectNinjaIOUtils from "./routes/projects/ninjaioutils/index.svelte";
  import PageProjectNVSTly from "./routes/projects/nvstly/index.svelte";
  import PageProjectPHLASH from "./routes/projects/phlash/index.svelte";
  import PageProjectRevKit from "./routes/projects/revkit/index.svelte";
  import PageProjectRsD from "./routes/projects/rsd/index.svelte";
  import PageProjectSvolte from "./routes/projects/svolte/index.svelte";
  import PageProjectYTMusic from "./routes/projects/ytmusic/index.svelte";
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
  <noscript>
    <div class="w-full bg-red-600">
      There's something wrong with you if you're browsing the web without JavaScript enabled. Turn
      on JS...
    </div>
  </noscript>
  <Navbar />
  <Router {url}>
    <Route path={Paths.Splash} component={PageSplash} />

    <Route path={Paths.ToolBPMFinder} component={PageBPMFinder} />

    <Route
      path={Paths.Project$.replace("$", ProjectID.NinjaIOUtils)}
      component={PageProjectNinjaIOUtils}
    />
    <Route path={Paths.Project$.replace("$", ProjectID.PHLASH)} component={PageProjectPHLASH} />
    <Route path={Paths.Project$.replace("$", ProjectID.RevKit)} component={PageProjectRevKit} />
    <Route path={Paths.Project$.replace("$", ProjectID.RsD)} component={PageProjectRsD} />
    <Route path={Paths.Project$.replace("$", ProjectID.Svolte)} component={PageProjectSvolte} />
    <Route path={Paths.Project$.replace("$", ProjectID.NVSTly)} component={PageProjectNVSTly} />
    <Route path={Paths.Project$.replace("$", ProjectID.YTMusic)} component={PageProjectYTMusic} />
  </Router>
</div>
