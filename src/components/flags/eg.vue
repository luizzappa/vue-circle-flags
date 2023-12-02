<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="4c92a950-8a62-48a2-931c-6663340ffd97">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#4c92a950-8a62-48a2-931c-6663340ffd97)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="m0 144 256-32 256 32v224l-256 32L0 368Z" />
      <path fill="#d80027" d="M0 0h512v144H0Z" />
      <path fill="#333" d="M0 368h512v144H0Z" />
      <path
        fill="#ff9811"
        d="M250 191c-8 0-17 4-22 14 5-3 16-1 16 13 0 4-2 8-5 10-8 0-14-14-29-14-10 0-19 7-19 17v69l46-7-14 27h66l-14-27 46 7v-69c0-10-9-17-19-17-15 0-21 14-29 14 8-23-7-37-23-37z"
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
