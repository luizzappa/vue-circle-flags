<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="ef6d3bb7-12d5-46c9-aa96-07a6f3743273">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#ef6d3bb7-12d5-46c9-aa96-07a6f3743273)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#0052b4" d="M0 0h167l64 256-64 256H0Z" />
      <path
        fill="#eee"
        d="m43.5 317 104-75h-128l104 75-40-122zM167 0h345v256l-173 64-172-64Z"
      />
      <path fill="#d80027" d="M167 256h345v256H167z" />
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
