<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="b61eaa89-c596-4ba1-ac9c-a29f635da463">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#b61eaa89-c596-4ba1-ac9c-a29f635da463)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M0 0h512v256l-256 32L0 256Z" />
      <path fill="#338af3" d="M0 256h512v256H0Z" />
      <circle cx="256" cy="256" r="128" fill="#d80027" />
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
