<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { link } from "svelte-routing";

  export let href: string;
</script>

<a
  class="btn rounded-full border-none min-h-[2.5rem] h-fit text-gray-200"
  style:background={Gradient(Gradients.Purple)}
  {href}
  use:link
>
  <slot />
</a>
