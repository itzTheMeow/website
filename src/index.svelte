<script lang="ts">
  import { Route, Router } from "svelte-routing";

  import Splash from "pages/Splash.svelte";
</script>

<div>
  <Router>
    <Route path="/" component={Splash} />
  </Router>
</div>
