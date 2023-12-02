<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="f01d27ec-1547-41a3-8dc8-8784e1f13fb8">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#f01d27ec-1547-41a3-8dc8-8784e1f13fb8)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#d80027" d="M0 0h512v73L256 96 0 73Z" />
      <path fill="#eee" d="M0 73h512v73l-256 23L0 146Z" />
      <path fill="#333" d="M0 146h512v73l-256 23L0 219Z" />
      <path fill="#ffda44" d="M0 219h512v74l-256 22L0 293Z" />
      <path fill="#4a1f63" d="M0 293h512v73l-256 23L0 366Z" />
      <path fill="#338af3" d="M0 366h512v73l-256 23L0 439Z" />
      <path fill="#6da544" d="M0 439h512v73H0z" />
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
