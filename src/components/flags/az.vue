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
        fill="#d80027"
        d="m0 166.9 253-31.8 259 31.8v178l-257.5 37.4L0 345z"
      />
      <path fill="#338af3" d="M0 0h512v166.9H0z" />
      <path fill="#6da544" d="M0 344.9h512V512H0z" />
      <g fill="#eee">
        <path
          d="M261.6 328.2a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7z"
        />
        <path
          d="m317.2 206 9.6 26.8 25.8-12.3-12.2 25.8 26.9 9.6-27 9.6 12.3 25.8-25.8-12.3-9.6 27-9.6-27-25.8 12.3 12.3-25.8-27-9.6 27-9.6-12.3-25.8 25.8 12.3z"
        />
      </g>
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
