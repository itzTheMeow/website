<script lang="ts">
  import { Colors } from "Colors";
  import { ScreenWidth } from "State";
  import { blur } from "svelte/transition";
  import { generateUltrablurCSS } from "ultrablur";

  const BASE_DELAY = 1200;

  export let offset: number, name: string, icon: string, color: string;
</script>

<div
  class="rounded-lg p-3 box-border"
  style:background={generateUltrablurCSS(color, Colors.primary, 25, 4)}
  style:width="calc({(1 / ($ScreenWidth <= 600 ? 1 : $ScreenWidth <= 1000 ? 2 : 3)) * 100}% -
  0.25rem)"
  in:blur={{ delay: BASE_DELAY + 150 * offset, duration: 800 }}
>
  <div class="flex rounded items-center gap-2 w-fit p-2" style:background={Colors.secondary}>
    <img class="w-10 h-10 object-contain" src={icon} alt={name} crossorigin="anonymous" />
    <div class="font-semibold text-lg">{name}</div>
  </div>
  <slot />
</div>
