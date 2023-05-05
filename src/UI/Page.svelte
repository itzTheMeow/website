<script lang="ts">
  import { onMount } from "svelte";

  export let title: string,
    className = "";

  onMount(() => {
    document.querySelector("title")!.innerText = title;
  });
</script>

<div class="flex-1 overflow-y-auto py-2 {className}">
  <slot />
</div>
