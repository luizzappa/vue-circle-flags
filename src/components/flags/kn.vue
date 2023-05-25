<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#ffda44"
        d="m0 401.9 173.6-225.3L401.9 0H449l63 63-.1 47.3-167.3 223.5L110.3 512H63L0 449z"
      />
      <path fill="#6da544" d="M0 0v401.9L401.9 0z" />
      <path fill="#d80027" d="M512 512V110.3L110.3 512z" />
      <path fill="#333" d="M0 512h63L512 63V0h-63L0 449z" />
      <path
        fill="#eee"
        d="m162.8 302 24 12.2 19-19-4.4 26.5 24 12.2-26.6 4.2-4.2 26.5-12-24L156 345l19-19zM302 162.8l24 12.1 19-19-4.3 26.6 24 12.1-26.6 4.2-4.2 26.5-12.2-23.9-26.5 4.2 19-19z"
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
