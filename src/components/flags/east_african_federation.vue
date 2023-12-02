<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="3ae1b258-1234-4afe-86d9-ff65cddb2760">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#3ae1b258-1234-4afe-86d9-ff65cddb2760)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#338af3"
        d="M0 0h512v141l-64 115 64 115v141H0V371l64-115L0 141Z"
      />
      <path fill="#eee" d="M0 141h512v23l-256 16L0 164Z" />
      <path fill="#333" d="M0 164h512v38l-256 16L0 202Z" />
      <path fill="#6da544" d="m0 220 256 16 256-16v-18H0Z" />
      <path fill="#eee" d="M0 371h512v-23l-256-16L0 348Z" />
      <path fill="#ff9811" d="M0 348h512v-38l-256-16L0 310Z" />
      <path fill="#6da544" d="m0 292 256-16 256 16v18H0Z" />
      <path fill="#ffda44" d="M0 220h512v72H0z" />
      <circle cx="256" cy="248" r="64" fill="#eee" />
      <path fill="#eee" d="m178 301 78-29 78 29v27H178Z" />
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
