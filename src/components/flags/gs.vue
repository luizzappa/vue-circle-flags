<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="9c9a28ca-60c0-42f2-8292-c955271dfd84">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#9c9a28ca-60c0-42f2-8292-c955271dfd84)">
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
      <rect
        width="64"
        height="32"
        x="336"
        y="256"
        fill="#6da544"
        rx="16"
        ry="16"
      />
      <circle cx="368" cy="96" r="32" fill="#ff9811" />
      <circle cx="368" cy="144" r="48" fill="#acabb1" />
      <path fill="#338af3" d="M320 144v77c0 36 48 48 48 48s48-12 48-48v-77z" />
      <rect
        width="32"
        height="128"
        x="288"
        y="128"
        fill="#333"
        rx="16"
        ry="16"
      />
      <rect
        width="32"
        height="128"
        x="416"
        y="128"
        fill="#333"
        rx="16"
        ry="16"
      />
      <path fill="#6da544" d="m320 144 48 112 48-112z" />
      <path fill="#ffda44" d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8z" />
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
