<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import Button from "UI/Button.svelte";
  import Page from "UI/Page.svelte";

  const project = Projects[ProjectID.Svolte];
</script>

<Background
  color={project.color}
  background={Colors.background}
  saturation={45}
  intensity={4}
  page
/>

<Page title="Svolte">
  <p>a revolt client</p>
  <Button color={project.color} clicked="https://revolt.itsmeow.cat" label="Go to Client">
    Use Client
  </Button>
  <Button
    color={project.color}
    clicked="https://github.com/itzTheMeow/revolt-svolte"
    label="Visit GitHub Page"
  >
    GitHub
  </Button>
</Page>
