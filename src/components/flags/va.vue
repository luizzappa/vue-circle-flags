<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="9efe0c19-7ac3-43cc-8127-4b12347e78f0">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#9efe0c19-7ac3-43cc-8127-4b12347e78f0)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#ffda44" d="M0 0h256l51.7 254.7L256 512H0z" />
      <path fill="#eee" d="M256 0h256v512H256z" />
      <path
        fill="#acabb1"
        d="m354 222.8 48.1 63.6A33.4 33.4 0 1 0 420 273l-75-99.2-17.7 13.4-26.7 20.2 26.9 35.5 26.6-20.1zm69.3 73.1a11.1 11.1 0 1 1 13.4 17.8 11.1 11.1 0 0 1-13.4-17.8z"
      />
      <path
        fill="#ffda44"
        d="m436.6 242.9 26.8-35.5-26.6-20.2-17.8-13.4-75 99.2a33.4 33.4 0 1 0 17.8 13.4l48-63.6 26.8 20zm-93.8 68.6a11.1 11.1 0 1 1-17.8-13.4 11.1 11.1 0 0 1 17.8 13.4z"
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
