<script lang="ts">
  import MusicTempo from "music-tempo";
  import Button from "UI/Button.svelte";
  import FileInput from "UI/FileInput.svelte";
  import Page from "UI/Page.svelte";

  let state: {
      file?: File;
      error?: string;
      result?: number;
      message?: string;
    } = {},
    context: AudioContext;

  function startCalc() {
    if (!(state.file instanceof File)) return (state = {});
    const reader = new FileReader();
    reader.onload = (e) => {
      state.message = "Decoding audio...";
      if (e.target && e.target.result instanceof ArrayBuffer)
        (context || (context = new AudioContext())).decodeAudioData(
          e.target.result,
          (buf) => {
            state.message = "Calculating BPM...";
            let audioData: Float32Array = <any>[];
            if (buf.numberOfChannels == 2) {
              const channel1Data = buf.getChannelData(0),
                channel2Data = buf.getChannelData(1),
                length = channel1Data.length;
              for (let i = 0; i < length; i++) {
                audioData[i] = (channel1Data[i] + channel2Data[i]) / 2;
              }
            } else audioData = buf.getChannelData(0);

            const res = new MusicTempo(audioData);
            state.result = Math.round(Number(res.tempo));
          },
          (err) =>
            (state.error = `Failed to decode audio. ${
              String(err) ==
              `EncodingError: The buffer passed to decodeAudioData contains an unknown content type.`
                ? "Provided file is not an audio file!"
                : err
            }`)
        );
      else state.error = "Failed to decode audio data.";
    };
    state.message = "Reading file...";
    reader.readAsArrayBuffer(state.file);
  }
</script>

<Page title="BPM Finder" className="p-2">
  <div class="mx-auto w-max max-w-full">
    {#if state.result}
      BPM: {state.result}
      <Button className="mt-1" clicked={() => (state = {})}>Go Back</Button>
    {:else if state.error}
      <div>{state.error}</div>
      <Button className="mt-1" clicked={() => (state = {})}>Try Again</Button>
    {:else if state.message}
      <div>{state.message}</div>
    {:else}
      <h1 class="text-2xl font-semibold">BPM Finder</h1>
      <p class="text-sm max-w-md">
        Upload an audio file to detect its BPM. All detection is done in the browser, meaning
        whatever media your browser supports will work. (try mp3, ogg, wav, or m4a)
      </p>
      <p class="text-xs mb-2">Please Note: This tool is not 100% accurate.</p>
      <FileInput
        className="mx-auto"
        text="Upload Audio"
        on:upload={({ detail }) => ((state = { file: detail }), startCalc())}
      />
    {/if}
  </div>
</Page>
