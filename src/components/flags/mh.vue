<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="70db01ea-a241-4488-91f0-7048aae2c3c6">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#70db01ea-a241-4488-91f0-7048aae2c3c6)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#0052b4" d="M0 0h397.6L512 114.2V512H0z" />
      <path fill="#eee" d="M512 0H397.6L0 512 493.4 53.7z" />
      <path fill="#ff9811" d="m0 512 512-397.8V0z" />
      <path
        fill="#eee"
        d="M222.2 150.1 191 164.8l16.7 30.3-34-6.5-4.3 34.3-23.6-25.2-23.7 25.2-4.3-34.3-33.9 6.5 16.6-30.3-31.2-14.7 31.2-14.7L84 105.1l34 6.5 4.2-34.3 23.7 25.3 23.6-25.3 4.3 34.3 34-6.5-16.7 30.3z"
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
