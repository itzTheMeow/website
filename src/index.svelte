<script lang="ts">
  import { Colors } from "Colors";
  import Navbar from "navbar/Navbar.svelte";
  import { Route, Router } from "svelte-routing";
  import { generateUltrablurCSS } from "ultrablur";
  import PageSplash from "./routes/splash/index.svelte";
</script>

<div
  class="absolute top-0 left-0 w-full h-full blur-md"
  style:background={generateUltrablurCSS(Colors.background, "#000000", -70, 15)}
/>
<div class="flex flex-col overflow-x-hidden w-full h-full relative">
  <Navbar />
  <Router>
    <Route component={PageSplash} path="/" />
  </Router>
</div>
