<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#496e2d" d="m0 378.5 254.1-22.1L512 378.5V512H0z" />
      <path fill="#ffda44" d="m0 256.1 255-30.3 257 30.3v122.4H0z" />
      <path fill="#338af3" d="M0 0h512v256H0z" />
      <path
        fill="#ffda44"
        d="m289.4 150 31.3 14.6L304 195l34-6.5 4.3 34.3 23.6-25.2 23.7 25.2 4.3-34.3 34 6.5-16.7-30.3 31.2-14.7-31.2-14.7 16.6-30.3-34 6.5-4.2-34.3-23.7 25.3-23.6-25.3-4.3 34.3-34-6.5 16.7 30.3z"
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
