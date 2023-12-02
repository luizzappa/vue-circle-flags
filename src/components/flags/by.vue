<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="0eb4a0a0-0972-4bd1-b207-1234f36c2fa5">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#0eb4a0a0-0972-4bd1-b207-1234f36c2fa5)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M0 0h155.8l35 254.6-35 257.4H0z" />
      <path fill="#a2001d" d="M155.8 0H512v345.1l-183 37.4-173.2-37.4z" />
      <path fill="#6da544" d="M155.8 345.1H512V512H155.8z" />
      <path
        fill="#a2001d"
        d="M50 .2 22.3 50l27.8 50.4L77.9 50zm55.8 0L78 50l27.7 50.4 28-50.4zM50 137.5l-27.7 49.6 27.8 50.5 27.7-50.5zm55.8 0L78 187.1l27.7 50.5 28-50.5zM50 274.7l-27.7 49.7 27.8 50.4 27.8-50.4zm55.8 0L78 324.4l27.7 50.4 28-50.4zM50 412l-27.7 49.6 27.8 50.5 27.7-50.5zm55.8 0L78 461.6l27.7 50.5 28-50.5z"
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
