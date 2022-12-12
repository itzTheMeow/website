<script lang="ts">
  import { link } from "svelte-routing";
  import type { DracColors } from "./Colors";

  export let color: DracColors;
  export let href = "";
  export let className = "";
  export let style = "";
  export let id = "";
  export let pill = false;
  export let alt = false;
  export let onclick: ((e: MouseEvent) => any) | undefined = undefined;
  export let icon: ConstructorOfATypedSvelteComponent | undefined = undefined;
</script>

{#if href}
  <a
    class="drac-btn drac-bg-{color} drac-text-{alt ? 'black' : 'white'} {pill
      ? 'rounded-full'
      : ''} {className}"
    {href}
    {style}
    on:click={(e) => e.currentTarget.blur()}
    {id}
    use:link
  >
    {#if icon}<svelte:component this={icon} />{/if}
    <slot />
  </a>
{:else}
  <button
    class="drac-btn drac-bg-{color} drac-text-{alt ? 'black' : 'white'} {pill
      ? 'rounded-full'
      : ''} {className}"
    {style}
    on:click={(e) => onclick?.(e)}
    {id}
  >
    {#if icon}<svelte:component this={icon} />{/if}
    <slot />
  </button>
{/if}
