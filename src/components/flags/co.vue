<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="f4553781-0199-4bd6-af2c-31ff5538fc94">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#f4553781-0199-4bd6-af2c-31ff5538fc94)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#d80027" d="m0 384 255.8-29.7L512 384v128H0z" />
      <path fill="#0052b4" d="m0 256 259.5-31L512 256v128H0z" />
      <path fill="#ffda44" d="M0 0h512v256H0z" />
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
