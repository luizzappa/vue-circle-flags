<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="0f0e0ba9-f76d-498d-a55b-7260f2a3d5bd">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#0f0e0ba9-f76d-498d-a55b-7260f2a3d5bd)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
      <path fill="#338af3" d="M289.4 133.6V256l78 40.4 77.9-40.4V133.6h-156z" />
      <path
        fill="#a2001d"
        d="M289.4 256c0 59.6 77.9 78 77.9 78s78-18.4 78-78h-156z"
      />
      <path
        fill="#333"
        d="M400.7 189.2h-22.3V167h-22.2v22.2h-22.3v22.3h22.3v66.8h22.2v-66.8h22.3z"
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
