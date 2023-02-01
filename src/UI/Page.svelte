<script lang="ts">
  import { onMount } from "svelte";

  export let title: string,
    className = "";

  onMount(() => {
    document.querySelector("title")!.innerText = title;
  });
</script>

<div class="flex-1 {className}">
  <slot />
</div>
