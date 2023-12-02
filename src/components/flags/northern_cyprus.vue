<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="ee6c62cc-b07f-47d8-b4ad-ef963ff23f84">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#ee6c62cc-b07f-47d8-b4ad-ef963ff23f84)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="M0 0v48l32 24L0 96v320l32 24-32 24v48h512v-48l-32-24 32-24V96l-32-24 32-24V0Z"
      />
      <path
        fill="#d80027"
        d="M0 464h512v-48H0ZM0 48v48h512V48Zm270 255v-94l55 76-89-29 89-29z"
      />
      <path
        fill="#d80027"
        d="M185 167a89 89 0 1 0 62 153 72 72 0 0 1-34 8 72 72 0 1 1 34-136 89 89 0 0 0-62-25Z"
      />
    </g>
    <g fill="none">
      <circle
        cx="256"
        cy="256"
        :r="circleStroke"
        fill="none"
        :style="{ stroke: props.strokeColor, strokeWidth: props.strokeWidth }"
      />
    </g>
  </svg>
</template>
<script setup lang="ts">
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      flagName: string | undefined;
      strokeColor?: string;
      strokeWidth?: number;
    }>(),
    {
      strokeColor: '#000',
      strokeWidth: 0
    }
  );

  const svgSize = computed(() => 512 + 2 * props.strokeWidth),
    viewBoxOrigin = computed(() => -props.strokeWidth),
    circleStroke = computed(() => 256 + props.strokeWidth / 2);
</script>
