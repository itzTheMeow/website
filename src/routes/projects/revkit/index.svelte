<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import Button from "UI/Button.svelte";
  import Page from "UI/Page.svelte";

  const project = Projects[ProjectID.RevKit];
</script>

<Background
  color={project.color}
  background={Colors.background}
  saturation={45}
  intensity={4}
  page
/>

<Page title="RevKit">
  <p>revolt package</p>
  <Button color={project.color} clicked="https://revk.it" label="Visit RevKit Website">
    Visit Website
  </Button>
  <Button
    color={project.color}
    clicked="https://github.com/Revolt-Unofficial-Clients/revkit"
    label="Visit GitHub Page"
  >
    GitHub
  </Button>
</Page>
