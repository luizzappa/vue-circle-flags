<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="8dcf74db-0885-4f1a-b99d-eb393e7c8dff">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#8dcf74db-0885-4f1a-b99d-eb393e7c8dff)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M0 68 68 0h376l68 68v376l-68 68H68L0 444Z" />
      <path
        fill="#d80027"
        d="M0 0v68l188 188L0 444v68h68l188-188 188 188h68v-68L324 256 512 68V0h-68L256 188 68 0Z"
      />
      <circle cx="256" cy="256" r="96" fill="#ff9811" />
      <circle cx="256" cy="256" r="64" fill="#6da544" />
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
