<script lang="ts">
  import Navbar from "navbar/Navbar.svelte";
  import { Route, Router } from "svelte-routing";
  import PageSplash from "./routes/splash/index.svelte";
</script>

<div class="flex flex-col overflow-x-hidden">
  <Navbar />
  <Router>
    <Route component={PageSplash} path="/" />
  </Router>
</div>
