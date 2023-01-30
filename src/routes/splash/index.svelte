<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { ScreenWidth } from "State";
  import { blur, fly } from "svelte/transition";
  import Page from "UI/Page.svelte";
</script>

<Page title="Meow">
  <div class="flex flex-col gap-0.5 {$ScreenWidth <= 800 ? 'mx-auto' : 'ml-[15%] mt-[10%]'} w-fit">
    <h1
      class="text-6xl font-bold bg-clip-text text-transparent font-[Nevis]"
      style:background-image={Gradient(Gradients.Orange)}
      in:fly={{ duration: 1000, x: 0, y: -35 }}
    >
      Hi, I'm Meow
    </h1>
    <p class="font-[Nevis]" in:blur={{ delay: 600, duration: 800 }}>I make stuff.</p>
  </div>
</Page>
