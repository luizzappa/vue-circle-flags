<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="235d8cb7-571a-480d-b537-bdff001f5c77">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#235d8cb7-571a-480d-b537-bdff001f5c77)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#0052b4"
        d="M0 0h512v89l-66.3 167.5L512 423v89H0v-89l69.7-167.3L0 89z"
      />
      <path
        fill="#eee"
        d="M0 89h512v78l-39.7 91.1L512 345v78H0v-78l36.3-85.6L0 167z"
      />
      <path fill="#d80027" d="M0 167h512v178H0z" />
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
