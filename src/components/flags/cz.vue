<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="ef69496f-7b2d-4741-b956-b10936151a2c">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#ef69496f-7b2d-4741-b956-b10936151a2c)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M0 0h512v256l-265 45.2z" />
      <path fill="#d80027" d="M210 256h302v256H0z" />
      <path fill="#0052b4" d="M0 0v512l256-256L0 0z" />
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
