<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="deefffd6-c451-4658-a88b-340fc011b0e9">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#deefffd6-c451-4658-a88b-340fc011b0e9)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="m126 158 127.8-10.3L512 167v178l-254.9 32.3L126 335.9z"
      />
      <path fill="#333" d="M0 0h512v167H107z" />
      <path fill="#6da544" d="M107 345h405v167H0z" />
      <path fill="#d80027" d="M0 0v512l256-256z" />
      <path
        fill="#eee"
        d="m101.6 200.3 14 29.4 31.8-7.3-14.2 29.3 25.5 20.2-31.8 7.2.1 32.6-25.4-20.4-25.4 20.4V279l-31.7-7.2 25.5-20-14.2-29.4 31.8 7.3z"
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
