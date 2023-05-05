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
  </div>
  <div class="flex flex-wrap px-4 gap-1 justify-start">
    <Project offset={1} name="Trade Hub" icon="https://cdn.nvst.ly/static/logo.svg" color="#1dbac5">
      Trade Hub is a trade tracking/sharing app.
    </Project>
    <Project
      offset={2}
      name="YTMusic"
      icon="https://raw.githubusercontent.com/itzTheMeow/YTMusic/main/logo.svg"
      color="#661ae6"
    >
      A music downloader dashboard.
    </Project>
    <Project
      offset={3}
      name="RevKit"
      icon="https://raw.githubusercontent.com/Revolt-Unofficial-Clients/revkit/master/revkit-logo.svg"
      color="#ff4654"
    >
      A client library for Revolt.
    </Project>
    <Project
      offset={4}
      name="PHLASH"
      icon="https://raw.githubusercontent.com/itzTheMeow/revolt-phlash/master/PHLASH.png"
      color="#5b00c3"
    >
      A Revolt bot made using RevKit.
    </Project>
    <Project
      offset={5}
      name="Svolte"
      icon="https://raw.githubusercontent.com/itzTheMeow/revolt-svolte/master/svolte-logo.svg"
      color="#ff4654"
    >
      A Revolt client using Revkit.
    </Project>
    <Project
      offset={6}
      name="Revolt Subsystem for Discord"
      icon="https://raw.githubusercontent.com/itzTheMeow/revolt-subsystem-discord/master/rsd-logo-dark.svg"
      color="#ff4654"
    >
      A bridge providing 1-1 translation from Revolt's API to Discord's. Allows you to connect to a
      Discord account using a Revolt client.
    </Project>
    <Project
      offset={7}
      name="NinjaIOUtils"
      icon="https://raw.githubusercontent.com/itzTheMeow/NinjaIOUtils/master/logo.png"
      color="#344152"
    >
      A utility script and modloader for the browser game <a href="https://ninja.io">ninja.io</a>.
    </Project>
  </div>
</Page>
