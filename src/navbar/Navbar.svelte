<script lang="ts">
  import {
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconCodePlus,
    IconLogin,
    IconMenu2,
    IconPhotoUp,
  } from "@tabler/icons-svelte";
  import { MyAccount } from "Auth";
  import { Colors } from "Colors";
  import { getWindow, ScreenWidth } from "State";
  import { onDestroy, onMount } from "svelte";
  import { NavButtons, openMenu } from "./Navbar";
  import NavbarButton from "./NavbarButton.svelte";
  import NavbarPopout from "./NavbarPopout.svelte";

  function handleClick(e: MouseEvent) {
    if (
      $openMenu &&
      ![...e.composedPath()].find((e: any) => e.getAttribute?.("data-nav-popout") == "true")
    )
      openMenu.set(null);
  }
  onMount(() => {
    getWindow()?.addEventListener("click", handleClick);
  });
  onDestroy(() => {
    getWindow()?.removeEventListener("click", handleClick);
  });
</script>

<div class="w-full h-16 flex items-center px-3 gap-2 bg-black bg-opacity-10">
  {#if $ScreenWidth > 600}
    {#each NavButtons as btn}
      {#if !Array.isArray(btn.href)}
        <NavbarButton href={btn.href}>{btn.name}</NavbarButton>
      {:else}
        <NavbarButton href={() => Array.isArray(btn.href) && openMenu.set(btn.href)}>
          {btn.name}<IconChevronDown class="-mr-2" size={20} />
        </NavbarButton>
      {/if}
    {/each}
  {:else}
    <div class="relative">
      <NavbarButton popout href={() => openMenu.set($openMenu ? null : true)}>
        <IconMenu2 />
      </NavbarButton>
      {#if $openMenu && $ScreenWidth <= 600}
        <NavbarPopout className="top-[125%] left-0" />
      {/if}
    </div>
  {/if}
  {#if $openMenu && typeof $openMenu !== "boolean"}
    <ul
      class="absolute top-[125%] left-0 menu w-max rounded-box z-50"
      style:background={Colors.tertiary}
    >
      {#each NavButtons as btn}
        {#if !Array.isArray(btn.href)}
          <li>
            <NavbarButton href={btn.href} className="!rounded-none !bg-none !h-14 text-lg">
              {btn.name}
            </NavbarButton>
          </li>
        {:else}
          <li>
            <NavbarButton
              href={() => Array.isArray(btn.href) && openMenu.set(btn.href)}
              className="!rounded-none !bg-none !h-14 text-lg"
              popout
            >
              <IconChevronLeft class="mr-auto invisible" size={20} />
              {btn.name}
              <IconChevronRight class="ml-auto" size={20} />
            </NavbarButton>
          </li>
        {/if}
      {/each}
    </ul>
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
