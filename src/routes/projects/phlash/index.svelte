<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import Button from "UI/Button.svelte";
  import Page from "UI/Page.svelte";

  const project = Projects[ProjectID.PHLASH];
</script>

<Background
  color={project.color}
  background={Colors.background}
  saturation={45}
  intensity={4}
  page
/>

<Page title="PHLASH">
  <p>a revolt bot</p>
  <Button
    color={project.color}
    clicked="https://github.com/itzTheMeow/revolt-phlash"
    label="Visit GitHub Page"
  >
    GitHub
  </Button>
</Page>
