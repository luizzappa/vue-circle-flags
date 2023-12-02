<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="f6c8a9cb-297d-4ec0-a73d-9cff46997a69">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#f6c8a9cb-297d-4ec0-a73d-9cff46997a69)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z" />
      <path fill="#d80027" d="m0 167 255-23 257 23v178H0z" />
      <path fill="#333" d="M0 0h512v167H0z" />
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
