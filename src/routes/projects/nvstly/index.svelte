<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
  import Button from "UI/Button.svelte";
  import Page from "UI/Page.svelte";

  const project = Projects[ProjectID.NVSTly];
</script>

<Background
  color={project.color}
  background={Colors.background}
  saturation={45}
  intensity={4}
  page
/>

<Page title="NVSTly">
  <p>
    NVSTly is a free interactive social investing platform where traders track, share, & copy
    trades. Follow top traders or earn recognition through building performance stats and ranking
    against the best.
  </p>
  <Button color={project.color} clicked="https://nvstly.com" label="Visit NVSTly Website">
    Visit Website
  </Button>
</Page>
