<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="60c97d0e-197f-45b7-aec7-ef88e51dd5f8">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#60c97d0e-197f-45b7-aec7-ef88e51dd5f8)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#d80027"
        d="M0 0h512v167l-23.2 89.7L512 345v167H0V345l29.4-89L0 167z"
      />
      <path fill="#eee" d="M0 167h512v178H0z" />
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
