<script lang="ts">
  import { onMount } from "svelte";

  export let title: string;

  onMount(() => {
    document.body.title = title;
  });
</script>

<div>
  <slot />
</div>
