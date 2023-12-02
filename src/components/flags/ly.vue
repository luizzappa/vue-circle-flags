<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="62a5fb56-dece-4754-9dc9-7cd39fcb6868">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#62a5fb56-dece-4754-9dc9-7cd39fcb6868)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#333"
        d="m0 144.7 257-22.4 255 22.4v222.6l-254.9 31L0 367.3z"
      />
      <path fill="#d80027" d="M0 0h512v144.7H0z" />
      <path fill="#496e2d" d="M0 367.3h512V512H0z" />
      <g fill="#eee">
        <path
          d="m315.6 209.3 21 29 34-11-21 29 21 28.8-34-11-21 29v-36l-34-11 34-11z"
        />
        <path
          d="M258.3 328.4a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7z"
        />
      </g>
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
