<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="bb37f0be-0262-4e88-80a7-5c9098f3e5b4">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#bb37f0be-0262-4e88-80a7-5c9098f3e5b4)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#338af3" d="M256 0h256v512H0V256Z" />
      <path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32l42-16 41 16h45l-8-16 8-15v-14l-16-42 16-41V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <path fill="#0052b4" d="M128 256v-83l83 83zm128-45-83-83h83z" />
      <path
        fill="#eee"
        d="m367.3 144.7-78 22.3h.1v66.7l9.2 11-9.2 11.3c0 45.5 45.3 67 66.8 74.6l11.5-8.8 10.7 8.8c21.5-7.7 66.8-29.1 66.8-74.6l-8-11 8-11.3V167Z"
      />
      <path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97zm317.2 39v-33.4H289.4V167h66.8v66.7h-66.8V256h66.8v74.6a111 111 0 0 0 11.1 3.4s4.4-1 11.1-3.4V256h66.8v-22.3h-66.8V167Z"
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
