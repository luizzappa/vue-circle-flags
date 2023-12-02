<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="703ebb8a-0062-4c38-8e16-0f7ef8f3787d">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#703ebb8a-0062-4c38-8e16-0f7ef8f3787d)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="M74.1 115 512 156.9v31.5l-42.4 70.3 42.4 64.2v31.5L74.1 386.8z"
      />
      <path fill="#333" d="M0 0h512v156.8H50z" />
      <path fill="#a2001d" d="M150.6 188.3H512v134.5H150.6z" />
      <path fill="#496e2d" d="M50 354.3h462V512H0z" />
      <path fill="#0052b4" d="M0 0v512l256-256z" />
      <path
        fill="#ffda44"
        d="m83.4 192.4 31.2 43.6 51.2-16.3-31.9 43.2 31.3 43.6-51-16.9-31.7 43.2.3-53.7L32 262.2 83 246z"
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
