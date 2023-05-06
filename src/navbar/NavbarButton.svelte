<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { link } from "svelte-routing";
  import { tippy } from "svelte-tippy";

  export let href: string | (() => any),
    square = "",
    className = "",
    popout = false,
    label = "";
</script>

<svelte:element
  this={typeof href == "string" ? "a" : "button"}
  class="btn {square
    ? 'w-10 p-0'
    : ''} rounded-full border-none min-h-[2.5rem] h-10 text-gray-200 {className}"
  style:background={Gradient(square ? Gradients.Pink : Gradients.Purple)}
  use:tippy={{
    content: square,
    onShow() {
      if (!square) return false;
    },
    arrow: false,
    offset: [0, 6],
  }}
  aria-label={label || square}
  role="button"
  tabindex={0}
  href={typeof href == "string" ? href : undefined}
  on:click={typeof href !== "string" ? href() : undefined}
  use:link
  data-nav-popout={popout}
>
  <slot />
</svelte:element>
