<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import Button from "UI/Button.svelte";
  import Page from "UI/Page.svelte";

  const project = Projects[ProjectID.YTMusic];
</script>

<Background
  color={project.color}
  background={Colors.background}
  saturation={45}
  intensity={4}
  page
/>

<Page title="YTMusic">
  <p>music downloader dashboard</p>
  <Button
    color={project.color}
    clicked="https://github.com/itzTheMeow/YTMusic"
    label="Visit GitHub Page"
  >
    GitHub
  </Button>
</Page>
