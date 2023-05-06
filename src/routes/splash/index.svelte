<script lang="ts">
  import { Gradient, Gradients } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import { ScreenWidth } from "State";
  import Page from "UI/Page.svelte";
  import { blur, fly } from "svelte/transition";
  import Project from "./project.svelte";
</script>

<Page title="Meow">
  <div
    class="flex flex-col gap-0.5 {$ScreenWidth <= 800
      ? 'mx-auto mt-[7%]'
      : 'ml-[5%] mt-[3%]'} w-fit font-[Nevis]"
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
  <h2
    in:fly={{ duration: 300, [$ScreenWidth <= 425 ? "y" : "x"]: -15, delay: 1200 }}
    class="{$ScreenWidth <= 425
      ? 'text-center'
      : 'ml-[3%]'} mt-8 mb-2 uppercase brightness-[.7] font-[Quicksand] font-semibold"
  >
    Check it Out
  </h2>
  <div class="flex flex-wrap px-4 gap-1 justify-start">
    {#each Object.entries(Projects) as proj, i}
      <Project offset={i + 1} project={proj[1]}>
        {#if proj[0] == ProjectID.TradeHub}
          Trade Hub is a trade tracking/sharing app.
        {:else if proj[0] == ProjectID.YTMusic}
          A music downloader dashboard.
        {:else if proj[0] == ProjectID.RevKit}
          A client library for Revolt.
        {:else if proj[0] == ProjectID.PHLASH}
          A Revolt bot made using RevKit.
        {:else if proj[0] == ProjectID.Svolte}
          A Revolt client using Revkit.
        {:else if proj[0] == ProjectID.RsD}
          A bridge providing 1-1 translation from Revolt's API to Discord's. Allows you to connect
          to a Discord account using a Revolt client.
        {:else if proj[0] == ProjectID.NinjaIOUtils}
          A utility script and modloader for the browser game <a href="https://ninja.io">ninja.io</a
          >.
        {/if}
      </Project>
    {/each}
  </div>
</Page>
