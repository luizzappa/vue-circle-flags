<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="31cc19d9-f7bc-42ab-a64d-0cda1b2165c0">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#31cc19d9-f7bc-42ab-a64d-0cda1b2165c0)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#6da544"
        d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <path fill="#ffda44" d="M0 0h512v167H0z" />
      <path fill="#d80027" d="M0 345h512v167H0z" />
      <path
        fill="#eee"
        d="M431.5 216.5h-134L256 89l-41.4 127.6h-134l108.3 78.8L147.5 423 256 345l108.5 78-41.4-127.6z"
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
