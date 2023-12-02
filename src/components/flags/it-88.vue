<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="8eee8fa0-0d7c-491a-90f5-b05da7799920">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#8eee8fa0-0d7c-491a-90f5-b05da7799920)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="M0 0h222.6l31 23.4L289.4 0H512v222.6l-21.5 31 21.5 35.8V512H289.4l-34.2-20.5-32.6 20.5H0V289.4l22.7-32.6L0 222.6z"
      />
      <path
        fill="#d80027"
        d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0z"
      />
      <path
        fill="#333"
        d="M378.4 89a44.5 44.5 0 0 0-43 33.4l43 11.2 43.2-11.2A44.5 44.5 0 0 0 378.4 89zM334 189.2l55.7 11.1v-23.6c15.6-4 28-16.4 32-32l-43.2-11.1h-55.6L334 167z"
      />
      <path
        fill="#acabb1"
        d="M421.6 122.4h-98.8V167h11.1v-22.3h87.7a44.6 44.6 0 0 0 1.4-11.1c0-3.9-.5-7.6-1.4-11.2z"
      />
      <path
        fill="#333"
        d="M144.7 89a44.5 44.5 0 0 0-43.1 33.4l43.1 11.2 43.1-11.2A44.5 44.5 0 0 0 144.7 89zm-44.5 100.2 55.6 11.1v-23.6c15.7-4 28-16.4 32-32l-43.1-11.1H89l11.2 33.4z"
      />
      <path
        fill="#acabb1"
        d="M187.8 122.4H89V167h11.2v-22.3h87.6a44.6 44.6 0 0 0 1.4-11.1c0-3.9-.5-7.6-1.4-11.2z"
      />
      <path
        fill="#333"
        d="M378.4 311.7a44.5 44.5 0 0 0-43 33.3l43 11.2 43.2-11.2a44.5 44.5 0 0 0-43.2-33.3zM334 411.8l55.7 11.2v-23.7c15.6-4 28-16.4 32-32l-43.2-11.1h-55.6l11.1 33.4z"
      />
      <path
        fill="#acabb1"
        d="M421.6 345h-98.8v44.6h11.1v-22.3h87.7a44.6 44.6 0 0 0 1.4-11.1c0-3.9-.5-7.6-1.4-11.2z"
      />
      <path
        fill="#333"
        d="M144.7 311.7a44.5 44.5 0 0 0-43.1 33.3l43.1 11.2 43.1-11.2a44.5 44.5 0 0 0-43.1-33.3zm-44.5 100.1 55.6 11.2v-23.7c15.7-4 28-16.4 32-32l-43.1-11.1H89l11.2 33.4z"
      />
      <path
        fill="#acabb1"
        d="M187.8 345H89v44.6h11.2v-22.3h87.6a44.6 44.6 0 0 0 1.4-11.1c0-3.9-.5-7.6-1.4-11.2z"
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
