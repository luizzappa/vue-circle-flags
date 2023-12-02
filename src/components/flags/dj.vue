<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="ddb83ff8-5e3f-4305-b573-baf2a8ab90d0">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#ddb83ff8-5e3f-4305-b573-baf2a8ab90d0)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#338af3" d="M0 0h512v256l-153.2 35.7L210 256z" />
      <path fill="#6da544" d="M210 256h302v256H0z" />
      <path fill="#eee" d="M0 0v512l256-256z" />
      <path
        fill="#d80027"
        d="m103.6 189.2 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
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
