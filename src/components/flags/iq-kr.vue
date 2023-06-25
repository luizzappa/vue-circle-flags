<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_iq-kr"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#c_m_iq-kr)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="m0 144.7 257-22.4 255 22.4v222.6l-254.9 31L0 367.3z"
      />
      <path fill="#d80027" d="M0 0h512v144.7H0z" />
      <path fill="#6da544" d="M0 367.3h512V512H0z" />
      <path
        fill="#ffda44"
        d="m256 95.9 19.4 83.6 56.1-65-21.6 83 79.8-31.4-57.7 63.5 85.3 9.2-80.7 29.3L408 316l-85-11.5 40.8 75.5-70-49.7L295 416l-39-76.4-38.9 76.4 1.2-85.8-70 49.7 40.8-75.5-85 11.5 71.3-47.9-80.7-29.3 85.3-9.3-57.7-63.4 79.8 31.5-21.6-83.1 56 65z"
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
