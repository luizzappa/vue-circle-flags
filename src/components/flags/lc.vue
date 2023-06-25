<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_lc"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#c_m_lc)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#338af3" d="M0 0h512v512H0z" />
      <path fill="#eee" d="M161.4 345h189.2L256 122.4z" />
      <path fill="#333" d="M194.3 322.8 256 182.4l61.7 140.4z" />
      <path fill="#ffda44" d="M161.4 345h189.2L256 256z" />
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
