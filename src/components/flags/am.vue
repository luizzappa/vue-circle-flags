<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="997251ad-e9d8-4af7-b2fb-b1f7b255ae68">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#997251ad-e9d8-4af7-b2fb-b1f7b255ae68)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#0052b4"
        d="m0 166.9 253-26.7L512 167v178l-261.1 26L0 344.8z"
      />
      <path fill="#d80027" d="M0 0h512v166.9H0z" />
      <path fill="#ff9811" d="M0 344.9h512V512H0z" />
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
