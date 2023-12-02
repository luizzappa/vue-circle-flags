<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="dbc4e097-8674-4725-ac54-16db9a786edd">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#dbc4e097-8674-4725-ac54-16db9a786edd)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <path
        fill="#eee"
        d="m350.8 171.6-18.1 64.6-54.3-10-35-72-94.4 33.4-7.4-21-24.7-3 18.6 52.5 65-16.7 18.4 52-44.9 66.3 76.3 65-14.5 17 9.7 22.9 36.1-42.3-46.8-48 35.8-42 79.8 5.8 18.2-98.6 22 4 15-19.8-54.8-10zM256 256z"
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
