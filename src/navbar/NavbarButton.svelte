<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { link } from "svelte-routing";
  import { tippy } from "svelte-tippy";

  export let href: string,
    square = "";
</script>

<a
  class="btn {square ? 'w-10 p-0' : ''} rounded-full border-none min-h-[2.5rem] h-10 text-gray-200"
  style:background={Gradient(square ? Gradients.Pink : Gradients.Purple)}
  use:tippy={{
    content: square.toUpperCase(),
    onShow() {
      if (!square) return false;
    },
  }}
  {href}
  use:link
>
  <slot />
</a>
