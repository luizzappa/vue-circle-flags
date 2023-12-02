<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="4c60289c-4e5d-41d9-ac6c-57f29e36aaea">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#4c60289c-4e5d-41d9-ac6c-57f29e36aaea)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="M0 0h512v186l-64 48 64 48v57l-64 48 64 48v77H0v-77l64-48-64-48v-57l64-48-64-48Z"
      />
      <path
        fill="#d80027"
        d="M0 186h512v96H0zm0 153h512v96H0zm224-181 83-60H205l83 60-32-98Zm118 0 83-60H323l83 60-32-98Zm-236 0 83-60H87l83 60-32-98Z"
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
