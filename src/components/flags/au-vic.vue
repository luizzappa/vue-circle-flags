<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="bd178c8c-cb15-4a3c-86bf-c915b22b5e75">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#bd178c8c-cb15-4a3c-86bf-c915b22b5e75)">
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
      <path
        fill="#eee"
        d="m313 267 7 15 15-4-7 15 13 10-16 3v16l-13-10-12 10v-16l-16-3 13-10-7-15 16 4zm66-61 7 15 15-4-7 15 13 10-16 4v16l-13-10-12 10v-16l-16-4 13-10-7-15 16 4zm1 146 40-29h-50l40 29-15-48Zm-1 29 5 15 14-7-7 15 15 5-15 5 7 15-14-7-5 15-6-15-14 7 7-15-15-5 15-5-7-15 14 7zm57-114-8 14h-16l8 14-8 14h16l8 13 8-13h16l-8-14 8-14h-16z"
      />
      <path
        fill="#ffda44"
        d="M370 93v8h-8v17h8v15a25 25 0 0 0-34 37v15h85v-15a25 25 0 0 0-34-37v-15h8v-17h-8v-8z"
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
