<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="46274ac1-f6c8-4030-9938-454b0d4c13c1">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#46274ac1-f6c8-4030-9938-454b0d4c13c1)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#0052b4" d="m0 160 256-32 256 32v192l-256 32L0 352z" />
      <path fill="#eee" d="M0 0h512v160H0z" />
      <path fill="#d80027" d="M0 352h512v160H0z" />
      <path
        fill="#eee"
        d="M64 63v217c0 104 144 137 144 137s144-33 144-137V63z"
      />
      <path
        fill="#d80027"
        d="M96 95v185a83 78 0 0 0 9 34h206a83 77 0 0 0 9-34V95z"
      />
      <path
        fill="#eee"
        d="M288 224h-64v-32h32v-32h-32v-32h-32v32h-32v32h32v32h-64v32h64v32h32v-32h64z"
      />
      <path
        fill="#0052b4"
        d="M152 359a247 231 0 0 0 56 24c12-3 34-11 56-24a123 115 0 0 0 47-45 60 56 0 0 0-34-10l-14 2a60 56 0 0 0-110 0 60 56 0 0 0-14-2c-12 0-24 4-34 10a123 115 0 0 0 47 45z"
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
