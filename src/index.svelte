<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Paths from "Paths";
  import Navbar from "navbar/Navbar.svelte";

  import Contact from "pages/Contact.svelte";
  import Portfolio from "pages/Portfolio.svelte";
  import Splash from "pages/Splash.svelte";
</script>

<div class="flex flex-col w-full h-full">
  <Navbar />
  <div class="flex-1">
    <Router>
      <Route path={Paths.Contact} component={Contact} />
      <Route path={Paths.Portfolio} component={Portfolio} />
      <Route path={Paths.Splash} component={Splash} />
    </Router>
  </div>
</div>
