<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { fly } from "svelte/transition";
</script>

<h1
  class="text-6xl font-bold bg-clip-text text-transparent font-[Nevis]"
  style:background-image={Gradient(Gradients.Orange)}
  in:fly={{ duration: 1000, x: -100, y: 0 }}
>
  Hi, I'm Meow
</h1>
