<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c31acc17-9ebe-4352-ad40-61a8a6f9d2ef">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#c31acc17-9ebe-4352-ad40-61a8a6f9d2ef)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#ffda44" d="M0 256 256 0h256v512H0z" />
      <path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32l42-16 41 16h45l-8-16 8-15v-14l-16-42 16-41V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <path fill="#0052b4" d="M128 256v-83l83 83zm128-45-83-83h83z" />
      <path fill="#d80027" d="m128 128 128 128v-31l-97-97Z" />
      <path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Z" />
      <circle cx="64" cy="64" r="48" fill="#0052b4" />
      <path
        fill="#ffda44"
        d="m50 198 14-44 15 44-38-27h47zM162 86l14-44 15 44-38-27h47ZM64 17l28 86-73-53h90l-73 53Z"
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
