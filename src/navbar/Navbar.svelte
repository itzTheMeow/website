<script lang="ts">
  import {
    IconChevronDown,
    IconCodePlus,
    IconLogin,
    IconMenu2,
    IconPhotoUp,
  } from "@tabler/icons-svelte";
  import { MyAccount } from "Auth";
  import { ScreenWidth } from "State";
  import NavbarButton from "./NavbarButton.svelte";

  interface NavDrop {
    name: string;
    href: string;
  }

  let openMenu: { name: string; href: NavDrop[] } | true | null = null;

  const buttons: { name: string; href: string | (() => any) | NavDrop[] }[] = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    {
      name: "Packages",
      href: [
        { name: "revolt-toolset", href: "/package/revolt-toolset" },
        { name: "ultrablur", href: "/package/ultrablur" },
      ],
    },
  ];
</script>

<div class="w-full h-16 flex items-center px-3 gap-2 bg-black bg-opacity-10">
  {#if $ScreenWidth > 600}
    {#each buttons as btn}
      {#if !Array.isArray(btn.href)}
        <NavbarButton href={btn.href}>{btn.name}</NavbarButton>
      {:else}
        <NavbarButton href={() => (openMenu = btn)}>
          {btn.name}<IconChevronDown class="-mr-2" size={20} />
        </NavbarButton>
      {/if}
    {/each}
  {:else}
    <NavbarButton href="/"><IconMenu2 /></NavbarButton>
  {/if}
  {#if openMenu && typeof openMenu !== "boolean"}
    <div>
      {#each openMenu.href as item}
        <div>{item.name}</div>
      {/each}
    </div>
  {/if}
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
