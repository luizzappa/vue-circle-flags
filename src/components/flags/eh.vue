<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="6279edc9-69d7-4bfa-91fe-6935fb7ea272">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#6279edc9-69d7-4bfa-91fe-6935fb7ea272)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="m90.1 144.8 210.5-27.7L512 144.8v222.6l-209 32.4-213-32.4z"
      />
      <path fill="#333" d="M0 0h512v144.8H28.2z" />
      <path fill="#496e2d" d="M39.5 367.4H512V512H0z" />
      <path
        fill="#d80027"
        d="M0 .1V512h.1L256 256.1 0 .1zm365.1 178.1a78 78 0 1 0 18.9 154 78 78 0 0 1 0-152.2 78.2 78.2 0 0 0-18.9-1.8z"
      />
      <path
        fill="#d80027"
        d="m387.3 206.1 11 34h35.8l-29 21 11.1 34-29-21-28.9 21 11.1-34-29-21h35.8z"
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
