<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="0dd03694-614c-4c22-9087-09f0b0155fa3">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#0dd03694-614c-4c22-9087-09f0b0155fa3)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#ffda44" d="M384 0h128v128L352 352 128 512H0V384l160-224Z" />
      <path fill="#6da544" d="M0 384 384 0H0Z" />
      <path fill="#d80027" d="M512 128 128 512h384z" />
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
