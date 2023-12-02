<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="239448e7-6c68-4e7f-bf9c-c696d5a0732c">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#239448e7-6c68-4e7f-bf9c-c696d5a0732c)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#0052b4"
        d="m0 44.5 257.8-23.7L512 44.5v423l-252.5 26L0 467.5z"
      />
      <circle cx="256" cy="256" r="122.4" fill="#eee" />
      <circle cx="256" cy="256" r="100.2" fill="#6da544" />
      <circle cx="256" cy="256" r="66.8" fill="#eee" />
      <path
        fill="#0052b4"
        d="M256 239.3 219.8 256v27.8l36.2 22.3 36.2-22.3V256z"
      />
      <path fill="#ffda44" d="M219.8 222.6h72.4V256h-72.4z" />
      <path fill="#a2001d" d="M0 0h512v44.5H0zm0 467.5h512V512H0z" />
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
