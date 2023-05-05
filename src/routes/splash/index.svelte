<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { ScreenWidth } from "State";
  import Page from "UI/Page.svelte";
  import { blur, fly } from "svelte/transition";
  import Project from "./project.svelte";
</script>

<Page title="Meow">
  <div
    class="flex flex-col gap-0.5 {$ScreenWidth <= 800
      ? 'mx-auto mt-[7%]'
      : 'ml-[15%] mt-[10%]'} w-fit font-[Nevis]"
  >
    <h1
      class="{$ScreenWidth <= 425
        ? 'text-4xl'
        : 'text-6xl'} font-bold bg-clip-text text-transparent"
      style:background-image={Gradient(Gradients.Orange)}
      in:fly={{ duration: 900, y: -35 }}
    >
      Hi, I'm Meow
    </h1>
    <p in:blur={{ delay: 400, duration: 800 }}>I make stuff.</p>
  </div>
  <div class="ml-[10%] mt-8">
    <h2
      in:fly={{ duration: 300, x: -15, delay: 1200 }}
      class="text-sm uppercase brightness-[.65] font-[Quicksand] font-semibold"
    >
      Check it Out
    </h2>
    <Project
      name="YTMusic"
      icon="https://raw.githubusercontent.com/itzTheMeow/YTMusic/main/logo.svg"
      color="#661ae6"
    >
      test
    </Project>
    <Project name="Trade Hub" icon="https://cdn.nvst.ly/static/logo.svg" color="#1dbac5">
      test
    </Project>
    <Project
      name="RevKit"
      icon="https://raw.githubusercontent.com/Revolt-Unofficial-Clients/revkit/master/revkit-logo.svg"
      color="#ff4654"
    >
      test
    </Project>
  </div>
</Page>
