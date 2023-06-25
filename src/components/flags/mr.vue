<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_mr"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#c_m_mr)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#496e2d" d="M0 0h512v512H0z" />
      <g fill="#ffda44">
        <path
          d="M256 295.8a89 89 0 0 1-87-70 89.4 89.4 0 0 0-2 19 89 89 0 1 0 178 0 89.4 89.4 0 0 0-2-19 89 89 0 0 1-87 70z"
        />
        <path
          d="m256 178 8.3 25.6H291l-21.7 15.8 8.3 25.5L256 229l-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"
        />
      </g>
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
