<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="fbe03ab5-bd7d-43df-a4bb-a1d7e5df84e2">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#fbe03ab5-bd7d-43df-a4bb-a1d7e5df84e2)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#0052b4"
        d="M0 0h512v167l-64 89 64 89v167H0V345l64-89-64-89Z"
      />
      <path fill="#eee" d="M0 167h512v178H0z" />
      <path
        fill="#d80027"
        d="M344.3 299.8A128 128 0 0 1 201.8 382 128 128 0 0 1 96 256a128 128 0 0 1 105.8-126 128 128 0 0 1 142.5 82.2L224 256z"
      />
      <circle cx="224" cy="256" r="64" fill="#ffda44" />
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
