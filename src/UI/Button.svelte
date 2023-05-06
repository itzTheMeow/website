<script lang="ts">
  import { Colors } from "Colors";
  import { link } from "svelte-routing";
  import tinycolor from "tinycolor2";

  export let color: string = Colors.tertiary,
    clicked: ((e: MouseEvent | TouchEvent) => any) | string | undefined = undefined,
    className = "",
    label = "Button";

  function click(e: MouseEvent | TouchEvent) {
    if (typeof clicked == "function") clicked?.(e);
  }
</script>

<svelte:element
  this={typeof clicked == "string" ? "a" : "button"}
  class="btn gap-1 hover:blur-[1px] {className}"
  style:background={color}
  style:border-color={tinycolor(color).darken().toRgbString()}
  style:color={tinycolor(color).isDark() ? Colors.text : Colors.background}
  href={typeof clicked == "string" ? clicked : ""}
  target={typeof clicked == "string" && !clicked.startsWith("/") ? "_blank" : ""}
  use:link
  on:click={click}
  aria-label={label}
  role="button"
  tabindex={0}
>
  <slot />
</svelte:element>
