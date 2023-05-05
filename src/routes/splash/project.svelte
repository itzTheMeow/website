<script lang="ts">
  import { Colors } from "Colors";
  import { generateUltrablurCSS } from "ultrablur";

  export let name: string, icon: string, color: string;
</script>

<div
  class="rounded-lg w-1/4 p-3 box-border"
  style:background={generateUltrablurCSS(color, Colors.primary, 30, 4)}
>
  <div
    class="flex rounded items-center gap-1 w-fit px-2 py-0.5"
    style:background={Colors.secondary}
  >
    <img class="w-12 h-12 object-contain" src={icon} alt={name} crossorigin="anonymous" />
    <h4 class="font-semibold text-lg">{name}</h4>
  </div>
  <slot />
</div>
