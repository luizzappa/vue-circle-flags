<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="e97994a5-1053-4c52-a2c3-5ca85f6d18f7">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#e97994a5-1053-4c52-a2c3-5ca85f6d18f7)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#ffda44"
        d="M0 0h445.3l33.9 255-33.9 257-323.7-134.3L0 66.8z"
      />
      <path fill="#0052b4" d="M0 66.8V512h445.4z" />
      <path fill="#0052b4" d="M445.3 0H512v512h-66.7z" />
      <path
        fill="#eee"
        d="m354.6 456-8.3 25.6h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5 21.7-15.8h-26.8zm-55-55.4-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5 21.7-15.8h-26.8zM244.4 345l-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5 21.7-15.8h-26.8zm-55.1-55.7-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8L211 356l-8.3-25.5 21.7-15.8h-26.8zm-55.4-55.7-8.3 25.5H98.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5L169 259h-26.8zM78.7 178l-8.3 25.5H43.6l21.7 15.8-8.3 25.5L78.7 229l21.7 15.8-8.3-25.5 21.7-15.8H87zm-55.2-55.7-8.3 25.5h-26.8l21.7 15.8L1.8 189l21.7-15.8L45.2 189l-8.3-25.5 21.7-15.8H31.8z"
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
