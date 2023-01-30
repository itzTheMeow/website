<script lang="ts">
  import { Colors } from "Colors";
  import NavbarButton from "./NavbarButton.svelte";
</script>

<div class="w-full h-14 flex items-center px-4 py-2 gap-2" style:background={Colors.navbar}>
  <NavbarButton href="/">Home</NavbarButton>
  <NavbarButton href="/">Blog</NavbarButton>
  <NavbarButton href="/">Portfolio</NavbarButton>
</div>
