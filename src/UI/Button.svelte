<script lang="ts">
  import { Colors } from "Colors";

  export let color = Colors.tertiary,
    clicked: ((e: MouseEvent | TouchEvent) => any) | undefined = undefined,
    className = "";
</script>

<div
  class="btn gap-1 hover:blur-[1px] {className}"
  style:background={color}
  on:click={(e) => clicked?.(e)}
>
  <slot />
</div>
