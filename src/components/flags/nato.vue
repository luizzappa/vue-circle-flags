<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c277d026-11b1-4fde-a6fa-19ff192e9d99">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#c277d026-11b1-4fde-a6fa-19ff192e9d99)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#0052b4" d="M0 0h512v512H0z" />
      <path
        fill="#eee"
        d="m365.9 273.9 46-17.9-46-17.9-25.3-9.8-41-16-16-41a89.4 89.4 0 0 1 57 57l25.3 9.8a112 112 0 0 0-92-92l-17.9-46-17.9 46a112 112 0 0 0-92 92l-46 17.9 46 17.9a112 112 0 0 0 92 92l17.9 46 17.9-46a112 112 0 0 0 92-92zm-83.5-44.3L256 256h94.4l-68 26.4L256 256v94.4l-26.4-68L256 256h-94.4l68-26.4L256 256v-94.4zm-54-58.2-16 41-41 16a89.4 89.4 0 0 1 57-57zm-57 112.3 41 16 16 41a89.4 89.4 0 0 1-57-57zm112.3 57 16-41 41-16a89.4 89.4 0 0 1-57 57z"
      />
      <path
        fill="#0052b4"
        d="M350.4 256H256l26.4 26.4zm-188.8 0H256l-26.4-26.4zm94.4 94.4V256l-26.4 26.4zm0-94.4 26.4-26.4-26.4-68z"
      />
      <path
        fill="#eee"
        d="M244.9 33.4H267v44.5h-22zM33.4 244.9h44.5V267H33.4zM244.9 434H267v44.5h-22zM434 244.9h44.5V267H434z"
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
