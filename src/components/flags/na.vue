<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="ffc1ffb9-dfdb-427c-814f-81ac2c4944bd">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#ffc1ffb9-dfdb-427c-814f-81ac2c4944bd)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="m0 401.9 160.6-237.1L401.9 0H449l63 63v47.3L350.3 339.2 110.3 512H63L0 449z"
      />
      <path fill="#a2001d" d="M0 512h63L512 63V0h-63L0 449z" />
      <path fill="#0052b4" d="M0 0v401.9L401.9 0z" />
      <path fill="#496e2d" d="M512 512V110.3L110.3 512z" />
      <path
        fill="#ffda44"
        d="m211.5 144.7-28.7 13.5L198 186l-31.2-6-4 31.5-21.6-23.2-21.7 23.2-4-31.5-31 6 15.2-27.8L71 144.7l28.7-13.5-15.3-27.8 31.1 6 4-31.5 21.7 23.2L163 78l4 31.5 31-6-15.2 27.8z"
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
