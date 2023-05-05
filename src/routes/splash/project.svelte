<script lang="ts">
  export let name: string, icon: string;
</script>

<div>
  {name}
  <img src={icon} alt={name} crossorigin="anonymous" />
  <slot />
</div>
