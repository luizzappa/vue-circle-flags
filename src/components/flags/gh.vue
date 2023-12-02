<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="164f9297-544f-487b-b6e4-ca9390d45bcd">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#164f9297-544f-487b-b6e4-ca9390d45bcd)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#ffda44" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <path fill="#d80027" d="M0 0h512v167H0Z" />
      <path fill="#496e2d" d="M0 345h512v167H0Z" />
      <path fill="#333" d="m198 345 151-109H163l151 109-58-178Z" />
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
