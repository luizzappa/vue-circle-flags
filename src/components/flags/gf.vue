<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="3dc466cf-ba9d-47e1-b98b-5508d312a56c">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#3dc466cf-ba9d-47e1-b98b-5508d312a56c)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#6da544" d="m0 0 216.9 301.6L512 512V0z" />
      <path fill="#ffda44" d="m0 0 512 512H0z" />
      <path fill="#d80027" d="m256 121 90 270-234-168h288L166 391z" />
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
