<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_ag"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#c_m_ag)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#333" d="M0 .4h512l-34 229H36z" />
      <path
        fill="#ffda44"
        d="m367.3 205.3-109.7 19.4-112.9-19.4 45.5-21.3-24.2-44 49.3 9.4 6.3-49.9 34.4 36.7 34.4-36.6 6.3 50L346 140l-24.2 44z"
      />
      <path fill="#0052b4" d="M25.6 205.3h466.8L257 439.5z" />
      <path fill="#eee" d="M34 307.4h446L256 511.6z" />
      <path fill="#a2001d" d="m0 511.6 256 .4L0 .4zm256 .4 256-.4V0z" />
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
