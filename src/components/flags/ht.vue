<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#a2001d" d="m0 256 254.8-41.8L512 256v256H0z" />
      <path fill="#0052b4" d="M0 0h512v256H0z" />
      <path fill="#eee" d="m345 322.8-89-11.1-89 11V189.3h178z" />
      <circle cx="256" cy="267.1" r="44.5" fill="#0052b4" />
      <circle cx="256" cy="267.1" r="22.3" fill="#a2001d" />
      <path fill="#6da544" d="M222.6 211.5h66.8L256 244.9z" />
      <path fill="#ffda44" d="M244.9 233.7H267v66.8h-22z" />
      <path fill="#6da544" d="M291.6 293.8h-71.2l-53.4 29h178z" />
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
