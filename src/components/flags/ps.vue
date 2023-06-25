<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_ps"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#c_m_ps)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M41.3 121.9 512 167v178L43.8 391.3z" />
      <path fill="#333" d="M0 0h512v167H111z" />
      <path fill="#6da544" d="M111 345h401v167H0z" />
      <path fill="#d80027" d="M0 0v512l256-256z" />
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
