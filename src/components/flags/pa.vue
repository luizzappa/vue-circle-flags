<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="576147fe-1fc0-4eae-9cb2-e749c0624e4f">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#576147fe-1fc0-4eae-9cb2-e749c0624e4f)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M0 0h256l256 256v256H256L0 256z" />
      <path fill="#0052b4" d="M0 256v256h256V256z" />
      <path fill="#d80027" d="M256 0h256v256H256z" />
      <path
        fill="#0052b4"
        d="m152.4 89 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51L82.2 140h53.6z"
      />
      <path
        fill="#d80027"
        d="m359.6 289.4 16.6 51h53.6L386.4 372l16.6 51-43.4-31.5-43.4 31.6 16.6-51-43.4-31.6H343z"
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
