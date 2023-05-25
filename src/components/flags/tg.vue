<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#496e2d"
        d="M256 0h256v102.4L483.8 151l28.2 53.8v102.4l-30.5 50.7 30.5 51.7V512H0V409.6l34.7-51L0 307.1z"
      />
      <path fill="#ff9811" d="M0 44.5v423V256z" />
      <path
        fill="#ffda44"
        d="M231.7 102.4v102.4H512V102.4zM0 307.2v102.4h512V307.2H256l-128.2-26.4z"
      />
      <path fill="#d80027" d="M256 307.2V0H0v307.2z" />
      <path
        fill="#eee"
        d="m141.4 122.4 16.5 51h53.7L168 205l16.6 51-43.4-31.5L98 256l16.5-51L71 173.5h53.7z"
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
