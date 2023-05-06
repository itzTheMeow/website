<script lang="ts">
  import type { Colors } from "Colors";
  import { generateUltrablurCSS } from "ultrablur";

  export let color: Colors | string,
    background: Colors | string,
    saturation: number | undefined = undefined,
    intensity: number | undefined = undefined,
    className = "",
    page = false;
</script>

<div
  class="absolute top-0 left-0 w-full h-full {page ? 'page-bg' : ''} {className}"
  style:background={generateUltrablurCSS(color, background, saturation, intensity)}
/>
