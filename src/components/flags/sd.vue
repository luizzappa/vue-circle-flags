<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="8f12de6b-cbe8-4fc3-bb3b-c11b62d53f49">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#8f12de6b-cbe8-4fc3-bb3b-c11b62d53f49)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M43.6 109.4 512 144.7v222.6L43.8 397.2z" />
      <path fill="#d80027" d="M0 0h512v144.7H111z" />
      <path fill="#333" d="M111 367.3h401V512H0z" />
      <path fill="#496e2d" d="M0 0v512l256-256z" />
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
