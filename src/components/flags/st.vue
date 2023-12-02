<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="12a1316d-2abc-47b1-b264-da9c2a70bb0b">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#12a1316d-2abc-47b1-b264-da9c2a70bb0b)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#6da544"
        d="M0 0h512v167l-52.6 83.8L512 345v167H0l72-264.3z"
      />
      <path fill="#ffda44" d="M114.9 166.9H512v178H114.9z" />
      <path fill="#d80027" d="M0 0v512l256-256z" />
      <path
        fill="#333"
        d="m325 211.5 11.1 34H372l-29 21 11.1 34-29-21-28.9 21 11-34-28.8-21H314zm111.4 0 11 34h35.8l-29 21 11.1 34-29-21-28.9 21 11.1-34-29-21h35.8z"
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
