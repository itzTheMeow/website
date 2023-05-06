<script lang="ts">
  import Background from "Background.svelte";
  import { Colors } from "Colors";
  import { ProjectID, Projects } from "Projects";
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

<Page title="Trade Hub">test</Page>
