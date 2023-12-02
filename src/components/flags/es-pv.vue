<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="f6a1bdfd-b166-4317-8ec0-62015abe71b4">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#f6a1bdfd-b166-4317-8ec0-62015abe71b4)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#d80027"
        d="M0 47.2 47.2 0h175.4L256 27.3 289.4 0H465l47 47.3v175.3l-24.2 35.2 24.2 31.6v175.4L464.8 512H289.4l-32-26.4-34.8 26.4H47.2L0 464.8V289.4L25 257 0 222.6z"
      />
      <path
        fill="#496e2d"
        d="M0 0v47.2L208.8 256 0 464.8V512h47.2L256 303.2 464.8 512H512v-47.2L303.2 256 512 47.3V0h-47L256 208.8 47.2 0H0z"
      />
      <path
        fill="#eee"
        d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0h-66.8z"
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
