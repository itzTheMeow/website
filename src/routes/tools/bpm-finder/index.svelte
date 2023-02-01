<script lang="ts">
  import Page from "UI/Page.svelte";
</script>

<Page title="BPM Finder" className="p-2">
  <h1 class="text-2xl font-semibold">BPM Finder</h1>
  <p class="text-sm max-w-md">
    Upload an audio file to detect its BPM. All detection is done in the browser, meaning whatever
    media your browser supports will work. (try mp3, ogg, wav, or m4a)<br />
    Please Note: This method is not 100% accurate.
  </p>
</Page>
