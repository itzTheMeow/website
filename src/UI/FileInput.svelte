<script lang="ts">
  import { IconUpload } from "@tabler/icons-svelte";
  import { Colors } from "Colors";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let text = "Choose File";
</script>

<div>
  <input type="file" class="hidden" />
  <div class="btn gap-1 hover:blur-[1px]" style:background={Colors.tertiary}>
    <IconUpload size={20} />
    {text}
  </div>
</div>
