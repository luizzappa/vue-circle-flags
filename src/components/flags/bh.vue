<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="15a0cc0f-440d-41ed-b6db-1a9cd4321907">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#15a0cc0f-440d-41ed-b6db-1a9cd4321907)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M0 0h182.5l88.1 268.5-88 243.5H0z" />
      <path
        fill="#d80027"
        d="m182.5 0-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6H512V0H182.5z"
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
