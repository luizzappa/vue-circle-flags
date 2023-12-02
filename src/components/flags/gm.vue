<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="0e1a148b-cab5-49b2-8da6-9ec505ed2859">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#0e1a148b-cab5-49b2-8da6-9ec505ed2859)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="m0 155.8 255-30.6 257 30.6v33.4l-27.7 67.2 27.7 66.4v33.4l-256 32.4L0 356.2v-33.4l28.8-68.5L0 189.2z"
      />
      <path fill="#a2001d" d="M0 0h512v155.8H0z" />
      <path fill="#0052b4" d="M0 189.2h512v133.6H0z" />
      <path fill="#496e2d" d="M0 356.2h512V512H0z" />
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
