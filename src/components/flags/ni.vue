<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="a3b43d51-49b3-489b-80d2-235a1eee8560">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#a3b43d51-49b3-489b-80d2-235a1eee8560)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#338af3"
        d="M0 0h512v144.7l-41.4 111.7L512 367.3V512H0V367.3l41.5-107.9L0 144.7z"
      />
      <path fill="#eee" d="M0 144.7h512v222.6H0z" />
      <path
        fill="#ffda44"
        d="M256 178a78 78 0 1 0 0 156 78 78 0 0 0 0-156zm0 122.5a44.5 44.5 0 1 1 0-89 44.5 44.5 0 0 1 0 89z"
      />
      <path
        fill="#0052b4"
        d="M294.6 267.1 256 256l-38.6 11.1-12.8 22.3h102.8z"
      />
      <path fill="#338af3" d="M256 200.3 230.3 245l25.7 11 25.7-11.1z" />
      <path fill="#6da544" d="M217.4 267.1h77.2L281.7 245h-51.4z" />
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
