<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="7d8f0fc1-847b-4909-99fd-00b57743f198">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#7d8f0fc1-847b-4909-99fd-00b57743f198)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#333" d="M0 0h512v256l-256 32L0 256Z" />
      <path fill="#d80027" d="M0 256h512v256H0Z" />
      <circle cx="256" cy="256" r="128" fill="#ffda44" />
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
