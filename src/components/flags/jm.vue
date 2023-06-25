<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_jm"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#c_m_jm)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#333"
        d="M23.3 488.6 0 465V47.1l23.4-23.7 464 464 24.6-22.6V47.1l-24.5-22.7z"
      />
      <path
        fill="#6da544"
        d="M23.3 23.3 47.1 0h417.7l23.8 23.4-464 464L47 512h418l22.6-24.5z"
      />
      <path
        fill="#ffda44"
        d="M0 0v47.1L208.8 256 0 464.9V512h47.1L256 303.2 464.9 512H512v-47L303.1 256 512 47.2V0h-47.2L256 208.9 47 0z"
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
