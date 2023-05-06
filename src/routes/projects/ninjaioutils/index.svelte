<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import Button from "UI/Button.svelte";
  import Page from "UI/Page.svelte";

  const project = Projects[ProjectID.NinjaIOUtils];
</script>

<Background
  color={project.color}
  background={Colors.background}
  saturation={45}
  intensity={4}
  page
/>

<Page title="NinjaIOUtils">
  <p>utils</p>
  <Button
    color={project.color}
    clicked="https://github.com/itzTheMeow/NinjaIOUtils"
    label="Visit GitHub Page"
  >
    GitHub
  </Button>
</Page>
