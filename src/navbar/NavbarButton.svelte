<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { link } from "svelte-routing";
  import { tippy } from "svelte-tippy";

  export let href: string | (() => any),
    square = "";
</script>

<svelte:element
  this={typeof href == "string" ? "a" : "div"}
  class="btn {square ? 'w-10 p-0' : ''} rounded-full border-none min-h-[2.5rem] h-10 text-gray-200"
  style:background={Gradient(square ? Gradients.Pink : Gradients.Purple)}
  use:tippy={{
    content: square,
    onShow() {
      if (!square) return false;
    },
    arrow: false,
    offset: [0, 6],
  }}
  href={typeof href == "string" ? href : undefined}
  use:link
>
  <slot />
</svelte:element>
