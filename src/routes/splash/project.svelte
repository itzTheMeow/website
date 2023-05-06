<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { Paths } from "Paths";
  import type { ProjectJSON } from "Projects";
  import { ScreenWidth } from "State";
  import { tick } from "svelte";
  import { navigate } from "svelte-routing/src/history";
  import { blur } from "svelte/transition";

  const BASE_DELAY = 1200,
    EXPAND_DURATION = 500;

  export let offset: number,
    projectID: string,
    project: ProjectJSON,
    ghost = false;

  let expand = false,
    card: HTMLDivElement;
</script>

<div
  class="rounded-lg box-border transition hover:brightness-[1.15] cursor-pointer relative overflow-hidden {ghost
    ? 'invisible'
    : ''}"
  style:width="calc({(1 / ($ScreenWidth <= 600 ? 1 : $ScreenWidth <= 1000 ? 2 : 3)) * 100}% -
  0.25rem)"
  bind:this={card}
  in:blur={{ delay: offset ? BASE_DELAY + 150 * offset : 0, duration: offset ? 800 : 0 }}
  on:click={async () => {
    expand = true;
    const rect = card.getBoundingClientRect();
    card.style.left = `${card.offsetLeft}px`;
    card.style.top = `${rect.top}px`;
    card.style.width = `${card.offsetWidth}px`;
    card.style.height = `${card.offsetHeight}px`;
    card.style.position = "fixed";
    card.style.transition = `all, ${EXPAND_DURATION}ms`;
    card.style.zIndex = "2";
    card.style.cursor = "default";
    [...card.children].forEach((c) => {
      if (c instanceof HTMLElement && !c.classList.contains("page-bg")) {
        c.style.transition = `opacity, ${EXPAND_DURATION}ms`;
      }
    });
    await tick();
    card.style.top = card.style.left = "0px";
    card.style.width = card.style.height = "100%";
    card.style.borderRadius = "0px";
    card.style.filter = "none";
    [...card.children].forEach((c) => {
      if (c instanceof HTMLElement && !c.classList.contains("page-bg")) {
        c.style.opacity = "0";
      }
    });
    setTimeout(() => navigate(Paths.Project$.replace("$", projectID)), EXPAND_DURATION * 1.05);
  }}
>
  <Background color={project.color} background={Colors.primary} saturation={25} intensity={4} />
  {#if expand}
    <Background
      color={project.color}
      background={Colors.background}
      saturation={45}
      intensity={4}
      page
    />
  {/if}
  <div class="relative p-3">
    <div class="flex rounded items-center gap-2 w-fit p-2" style:background={Colors.secondary}>
      <img
        class="w-10 h-10 object-contain"
        src={project.icon}
        alt={project.name}
        crossorigin="anonymous"
      />
      <div class="font-semibold text-lg">{project.name}</div>
    </div>
    <span>
      <slot />
    </span>
  </div>
</div>
{#if expand}
  <svelte:self {offset} {projectID} {project} ghost />
{/if}
