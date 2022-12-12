<script lang="ts">
  import { Colors } from "@ui/Colors";
  import Paths from "Paths";
  import NavbarLink from "./NavbarLink.svelte";
</script>

<div class="flex items-center p-4" style:background={Colors.black}>
  <div class="flex gap-2">
    <NavbarLink text="Home" href={Paths.Splash} />
    <NavbarLink text="Portfolio" href={Paths.Portfolio} />
    <NavbarLink text="Contact" href={Paths.Contact} />
  </div>
</div>
