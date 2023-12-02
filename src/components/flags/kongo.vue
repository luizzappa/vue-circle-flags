<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="5005112f-eea7-4c5d-9cc2-3392844bba6d">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#5005112f-eea7-4c5d-9cc2-3392844bba6d)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <path fill="#d80027" d="M0 0h512v160H0Z" />
      <path fill="#ffda44" d="M0 352h512v160H0Z" />
      <path fill="#333" d="M144 423 256 79l112 344L75 211h362z" />
      <path fill="#eee" d="m175 381 81-250 81 250-213-154h264z" />
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
