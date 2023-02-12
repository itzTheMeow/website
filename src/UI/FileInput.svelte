<script lang="ts">
  import { IconUpload } from "@tabler/icons-svelte";
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

  export let text = "Choose File",
    className = "";

  let input: HTMLInputElement;
</script>

<div class="w-max {className}">
  <input
    type="file"
    class="hidden"
    bind:this={input}
    on:change={() => {
      if (input.files?.[0]) dispatch("upload", input.files[0]);
    }}
  />
  <Button clicked={() => input.click()}>
    <IconUpload size={20} />
    {text}
  </Button>
</div>
