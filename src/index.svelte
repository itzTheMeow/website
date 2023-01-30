<script lang="ts">
  import Navbar from "navbar/Navbar.svelte";
  import { Route, Router } from "svelte-routing";
  import PageSplash from "./routes/splash/index.svelte";
</script>

<Navbar />
<Router>
  <Route component={PageSplash} path="/" />
</Router>
