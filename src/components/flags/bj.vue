<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="936c4d3f-45c6-4227-9962-28d1d90ce2a3">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#936c4d3f-45c6-4227-9962-28d1d90ce2a3)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#6da544" d="M0 0h189.2l54 257.6-54 254.4H0z" />
      <path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z" />
      <path fill="#d80027" d="M189.2 256H512v256H189.2z" />
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
