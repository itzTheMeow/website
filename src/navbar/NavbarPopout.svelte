<script lang="ts">
  import { IconChevronLeft, IconChevronRight } from "@tabler/icons-svelte";
  import { Colors } from "Colors";
  import { NavButtons, openMenu } from "./Navbar";
  import NavbarButton from "./NavbarButton.svelte";

  export let className = "",
    opened = false;
</script>

<ul class="absolute menu w-max rounded-box z-50 {className}" style:background={Colors.tertiary}>
  {#each opened && Array.isArray($openMenu) ? $openMenu : NavButtons as btn}
    {#if !Array.isArray(btn.href)}
      <li>
        <NavbarButton href={btn.href} className="!rounded-none !bg-none !h-14 text-lg">
          {btn.name}
        </NavbarButton>
      </li>
    {:else}
      <li class="relative">
        <NavbarButton
          href={() => Array.isArray(btn.href) && openMenu.set(btn.href)}
          className="!rounded-none !bg-none !h-14 text-lg"
          popout
        >
          <IconChevronLeft class="mr-auto invisible" size={20} />
          {btn.name}
          <IconChevronRight class="ml-auto" size={20} />
        </NavbarButton>
        {#if $openMenu == btn.href}
          <svelte:self opened className="top-0 left-[105%] block" />
        {/if}
      </li>
    {/if}
  {/each}
</ul>
