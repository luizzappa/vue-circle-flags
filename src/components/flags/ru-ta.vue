<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="350b18cc-57f5-49ac-b02b-b5069437fad0">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#350b18cc-57f5-49ac-b02b-b5069437fad0)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="m0 224 256-32 256 32v64l-256 32L0 288Z" />
      <path fill="#496e2d" d="M0 0h512v224H0z" />
      <path fill="#d80027" d="M0 288h512v224H0z" />
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
