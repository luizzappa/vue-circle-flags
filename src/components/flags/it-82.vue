<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="38023d11-b5ed-44ff-9f7f-4b069842c861">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#38023d11-b5ed-44ff-9f7f-4b069842c861)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#d80027" d="m0 0 216.9 301.6L512 512V0z" />
      <path fill="#ffda44" d="m0 0 512 512H0z" />
      <path
        fill="#ff9811"
        d="M320.4 320.4A38.9 38.9 0 0 1 272 265l-3.2-1.7a72.5 72.5 0 0 0 30.5-125l-23.3 24a38.9 38.9 0 0 1-23.8 69.5v3.6a72.5 72.5 0 0 0-123.2 36l32.4 8.2a38.9 38.9 0 0 1 72-14l3.2-2a72.5 72.5 0 0 0 92.7 89l-9-32.3zM252.7 254z"
      />
      <path
        fill="#eee"
        d="M348.2 170.8 330 235.4l-54.3-10-35-72.1-94.4 33.5-7.4-21-24.7-3 18.6 52.4 65-16.6 18.4 52-45 66.3 76.4 65-14.5 17 9.7 22.9 36-42.4-46.7-48 35.8-42 79.8 5.8 18.2-98.5 22 4 15-19.8zM253.4 255z"
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
