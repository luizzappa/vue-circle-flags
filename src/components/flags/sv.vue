<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="5833add2-02f2-495a-9566-219faf1e9e1d">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#5833add2-02f2-495a-9566-219faf1e9e1d)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#0052b4"
        d="M0 0h512v144.7l-40.5 112.6 40.5 110V512H0V367.3l42.2-114L0 144.7z"
      />
      <path fill="#eee" d="M0 144.7h512v222.6H0z" />
      <path fill="#ffda44" d="m204.6 267.1 51.4-89 51.4 89z" />
      <path fill="#6da544" d="M322.8 296.5 256 330l-66.8-33.4V252h133.6z" />
      <path
        fill="#ffda44"
        d="m319 182-23.6 23.5a55.5 55.5 0 0 1-39.4 95 55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0z"
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
