<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="db7f861a-12a0-4237-9698-a15b9fbaa88c">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#db7f861a-12a0-4237-9698-a15b9fbaa88c)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z" />
      <path fill="#d80027" d="M0 0h512v167H0z" />
      <path fill="#333" d="M0 345h512v167H0z" />
      <path
        fill="#6da544"
        d="m153 194.8 13.8 42.5h44.7l-36.2 26.3 13.8 42.5-36.1-26.3-36.2 26.3 13.8-42.5-36.2-26.3h44.7zm206 0 13.9 42.5h44.7l-36.2 26.3 13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7z"
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
