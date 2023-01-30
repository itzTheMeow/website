<script lang="ts">
  import { IconCodePlus, IconLogin, IconPhotoUp } from "@tabler/icons-svelte";
  import { MyAccount } from "Auth";
  import { Colors } from "Colors";
  import NavbarButton from "./NavbarButton.svelte";
</script>

<div class="w-full h-16 flex items-center px-3 gap-2" style:background={Colors.navbar}>
  <NavbarButton href="/">Home</NavbarButton>
  <NavbarButton href="/">Blog</NavbarButton>
  <NavbarButton href="/">Portfolio</NavbarButton>
  <div class="flex items-center gap-2 ml-auto">
    <NavbarButton href="/" square="Upload Image"><IconPhotoUp /></NavbarButton>
    <NavbarButton href="/" square="Upload Code"><IconCodePlus /></NavbarButton>
    <NavbarButton href="/" square={$MyAccount ? "Manage Account" : "Log In"}>
      {#if $MyAccount}
        <img class="w-9 h-9 rounded-full" src="/avatars/{$MyAccount.id}" alt="" />
      {:else}
        <IconLogin style="transform:rotate(180deg)" />
      {/if}
    </NavbarButton>
  </div>
</div>
