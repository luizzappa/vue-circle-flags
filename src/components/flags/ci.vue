<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="b230453f-7da8-44eb-80ef-e9911cda6624">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#b230453f-7da8-44eb-80ef-e9911cda6624)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z" />
      <path fill="#ff9811" d="M0 0h167v512H0z" />
      <path fill="#6da544" d="M345 0h167v512H345z" />
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
