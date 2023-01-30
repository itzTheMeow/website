<script lang="ts">
  import { IconCodePlus, IconPhotoUp } from "@tabler/icons-svelte";
  import { Colors } from "Colors";
  import NavbarButton from "./NavbarButton.svelte";
</script>

<div class="w-full h-14 flex items-center px-4 py-3 gap-2" style:background={Colors.navbar}>
  <NavbarButton href="/">Home</NavbarButton>
  <NavbarButton href="/">Blog</NavbarButton>
  <NavbarButton href="/">Portfolio</NavbarButton>
  <div class="flex items-center gap-2 ml-auto">
    <NavbarButton href="/" square><IconPhotoUp /></NavbarButton>
    <NavbarButton href="/" square><IconCodePlus /></NavbarButton>
  </div>
</div>
