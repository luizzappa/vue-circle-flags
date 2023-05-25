<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M189.2 0H512v167l-347.5 24.6z" />
      <path fill="#6da544" d="m163 320 349 25v167H189.2z" />
      <path fill="#d80027" d="M0 0h189.2v167H512v178H189.2v167H0z" />
      <path
        fill="#eee"
        d="M156.6 112.7 133 89l-15.7 15.8L101.5 89 78 112.7l15.8 15.7L78 144l23.6 23.6 15.8-15.7 15.7 15.7 23.6-23.6-15.7-15.7z"
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
