<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="fb88d310-ff7c-4f7c-bf94-ca0b5060be17">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#fb88d310-ff7c-4f7c-bf94-ca0b5060be17)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#ffda44" d="M199 0h32l32 256-32 256h-32l-32-256Z" />
      <path fill="#496e2d" d="M167 0h32v512h-32l-32-256Z" />
      <path fill="#0052b4" d="M231 0h281v512H231Z" />
      <path
        fill="#d80027"
        d="M0 0h167v512H0Zm199 132-32 16 32 16a92 92 0 1 1 0 184l-32 16 32 16a124 124 0 0 0 0-248z"
      />
      <path
        fill="#0052b4"
        d="M199 132a124 124 0 0 0 0 248v-32a92 92 0 1 1 0-184z"
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
