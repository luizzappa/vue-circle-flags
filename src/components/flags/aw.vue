<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="4492dad5-7da5-450b-b5cc-5a44e812aaf1">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#4492dad5-7da5-450b-b5cc-5a44e812aaf1)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#ffda44"
        d="m0 322.8 253.6-18.4L512 322.8v33.4l-258 15.3L0 356.2zm0 66.8 257.2-13.8L512 389.6V423l-253 16.9L0 423z"
      />
      <path
        fill="#338af3"
        d="M0 0h512v322.8H0zm0 356.2h512v33.4H0zM0 423h512v89H0z"
      />
      <path
        fill="#eee"
        d="m117.3 161.5-50-22.1 50-22 22-50.1 22.2 50 50 22-50 22.2-22.1 50z"
      />
      <path
        fill="#d80027"
        d="m139.4 94.9 13.6 30.9 31 13.6-31 13.6-13.6 31-13.6-31-31-13.6 31-13.6z"
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
