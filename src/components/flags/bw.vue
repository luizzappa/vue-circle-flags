<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="e697a0b3-cde3-4c79-85ff-ec794d58dd45">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#e697a0b3-cde3-4c79-85ff-ec794d58dd45)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#338af3"
        d="M0 0h512v178l-31 76.9 31 79.1v178H0V334l37-80.7L0 178z"
      />
      <path
        fill="#333"
        d="m0 211.5 256-19.2 256 19.2v89l-254.6 20.7L0 300.5z"
      />
      <path fill="#eee" d="M0 178h512v33.5H0zm0 122.5h512V334H0z" />
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
