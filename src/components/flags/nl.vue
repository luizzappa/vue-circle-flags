<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="574c6386-b95d-467a-8247-072a27871ed8">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#574c6386-b95d-467a-8247-072a27871ed8)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z" />
      <path fill="#a2001d" d="M0 0h512v167H0z" />
      <path fill="#0052b4" d="M0 345h512v167H0z" />
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
