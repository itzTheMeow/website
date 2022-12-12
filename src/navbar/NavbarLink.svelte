<script lang="ts">
  import Button from "@ui/Button.svelte";
  import { DracColors } from "@ui/Colors";

  export let text: string;
  export let href: string;
</script>

<Button color={DracColors.PinkPurple} {href} pill>{text}</Button>
