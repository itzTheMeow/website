<script lang="ts">
  import { link } from "svelte-routing";
  import { DracColors } from "./Colors";

  export let href = "javascript:void(0)";
  export let onclick: ((e: MouseEvent) => any) | undefined = undefined;
  export let color: DracColors = DracColors.OrangePink;
</script>

<a
  class="drac-text-{color} inline-block hover:brightness-75 active:translate-y-[1px]"
  {href}
  use:link
  on:click={(e) => onclick?.(e)}
>
  <slot />
</a>
