<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="ea3f5555-88b5-4ae8-a549-4ecc892ced7c">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#ea3f5555-88b5-4ae8-a549-4ecc892ced7c)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#333" d="M0 0h167l38.2 252.6L167 512H0z" />
      <path fill="#d80027" d="M345 0h167v512H345l-36.7-256z" />
      <path fill="#ffda44" d="M167 0h178v512H167z" />
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
