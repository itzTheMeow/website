<script lang="ts">
  import { IconCodePlus, IconPhotoUp } from "@tabler/icons-svelte";
  import { Colors } from "Colors";
  import NavbarButton from "./NavbarButton.svelte";
</script>

<div class="w-full h-16 flex items-center px-3 gap-2" style:background={Colors.navbar}>
  <NavbarButton href="/">Home</NavbarButton>
  <NavbarButton href="/">Blog</NavbarButton>
  <NavbarButton href="/">Portfolio</NavbarButton>
  <div class="flex items-center gap-2 ml-auto">
    <NavbarButton href="/" square><IconPhotoUp /></NavbarButton>
    <NavbarButton href="/" square><IconCodePlus /></NavbarButton>
    <NavbarButton href="/" square>
      <img
        class="w-9 h-9 rounded-full"
        src="https://s.gravatar.com/avatar/93ea38bcb080e3697a8bb93e480e7e93?s=80"
        alt=""
      />
    </NavbarButton>
  </div>
</div>
