<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="adf5254f-68c9-4837-bbe5-fdc3dcb7af01">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#adf5254f-68c9-4837-bbe5-fdc3dcb7af01)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="M0 0h224l32 32 32-32h224v224l-32 32 32 32v224H288l-32-32-32 32H0V288l32-32-32-32Z"
      />
      <path fill="#d80027" d="M224 0v224H0v64h224v224h64V288h224v-64H288V0Z" />
      <path
        fill="#acabb1"
        d="m256 104-44 76h-87l43 76-43 76h87l44 76 44-76h87l-43-76 43-76h-87z"
      />
      <path
        fill="#eee"
        d="m256 131-36 62h-73l37 63-37 63h73l36 63 36-63h73l-37-63 37-63h-73l-36-62z"
      />
      <path
        fill="#d80027"
        d="M259 195c-5 0-5 5-5 5v39h-3v-33s0-6-5-6c-6 0-6 6-6 6v35l-3 1v-25s0-6-5-6c-6 0-6 6-6 6v43c0 10 5 20 12 26v21h36v-17c9-5 16-14 18-25 0-6 2-11 4-16l4-14s1-5-4-7-7 3-7 3l-8 19h-3v-47s0-5-5-5c-6 0-6 5-6 5v36h-2v-39s0-5-6-5z"
      />
      <path
        fill="#ffda44"
        d="M245 38v11h-11v22h11v21c-6-6-14-9-22-9a33 33 0 0 0-23 57v20h112v-20c6-7 10-15 10-24a33 33 0 0 0-55-24V71h11V49h-11V38Z"
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
