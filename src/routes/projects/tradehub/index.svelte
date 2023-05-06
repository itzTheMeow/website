<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import Button from "UI/Button.svelte";
  import Page from "UI/Page.svelte";

  const project = Projects[ProjectID.TradeHub];
</script>

<Background
  color={project.color}
  background={Colors.background}
  saturation={45}
  intensity={4}
  page
/>

<Page title="Trade Hub">
  <p>Trade Hub is a social trading app that lets you track and share trades.</p>
  <Button color={project.color} clicked="https://thetradehub.net" label="Visit Trade Hub Website">
    Visit Website
  </Button>
</Page>
