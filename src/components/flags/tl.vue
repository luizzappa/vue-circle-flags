<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="1a8cee3c-7e6c-4835-b9ae-b4e7b4bbf722">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#1a8cee3c-7e6c-4835-b9ae-b4e7b4bbf722)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#ffda44" d="m0 0 214 251.8L0 512l418-256z" />
      <path fill="#d80027" d="M512 0H0l367.3 256L0 512h512z" />
      <path fill="#333" d="M0 0v512l256-256z" />
      <path
        fill="#eee"
        d="m71 197.4 39 36.8 47-25.6-23 48.4 39 36.9-53.2-7-23 48.5-9.9-52.7-53.2-7 47.1-25.6z"
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
