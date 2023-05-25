<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#a)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <circle cx="256" cy="64" r="32" fill="#ffda44" />
      <circle cx="64" cy="256" r="32" fill="#ffda44" />
      <circle cx="448" cy="256" r="32" fill="#ffda44" />
      <circle cx="256" cy="448" r="32" fill="#ffda44" />
      <circle cx="352" cy="400" r="32" fill="#ffda44" />
      <circle cx="400" cy="352" r="32" fill="#ffda44" />
      <circle cx="352" cy="112" r="32" fill="#ffda44" />
      <circle cx="400" cy="160" r="32" fill="#ffda44" />
      <circle cx="160" cy="112" r="32" fill="#ffda44" />
      <circle cx="112" cy="160" r="32" fill="#ffda44" />
      <circle cx="112" cy="352" r="32" fill="#ffda44" />
      <circle cx="160" cy="400" r="32" fill="#ffda44" />
      <path
        fill="#ffda44"
        d="m256 60-103 52 20 61-61-20-52 103 52 103 61-20-20 61 103 52 103-52-20-61 61 20 52-103-52-103-61 20 20-61zm0 36 64 32-32 96 96-32 32 64-32 64-96-32 32 96-64 32-64-32 32-96-96 32-32-64 32-64 96 32-32-96z"
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
