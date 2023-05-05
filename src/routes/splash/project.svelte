<script lang="ts">
  import { Colors } from "Colors";
  import { generateUltrablurCSS } from "ultrablur";

  export let name: string, icon: string, color: string;
</script>

<div
  class="rounded-lg w-1/4 p-3 box-border"
  style:background={generateUltrablurCSS(color, Colors.primary, 25, 4)}
>
  <div class="flex rounded items-center gap-2 w-fit p-2" style:background={Colors.secondary}>
    <img class="w-10 h-10 object-contain" src={icon} alt={name} crossorigin="anonymous" />
    <h4 class="font-semibold text-lg">{name}</h4>
  </div>
  <slot />
</div>
