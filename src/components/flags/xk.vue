<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="05b168ad-aeaa-40ea-ab06-bc6bb91567f9">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#05b168ad-aeaa-40ea-ab06-bc6bb91567f9)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#0052b4" d="M0 0h512v512H0z" />
      <path
        fill="#eee"
        d="m112.4 155.8 5.6 17h17.9l-14.5 10.5 5.5 17-14.5-10.5L98 200.3l5.5-17L89 172.8h18zm55.7-16.7 5.5 17h18L177 166.6l5.6 17-14.5-10.5-14.5 10.6 5.6-17-14.5-10.6h17.9zm55.7-16.7 5.5 17h17.9L232.7 150l5.5 17-14.4-10.6-14.5 10.6 5.5-17-14.5-10.6h18zm175.8 33.4-5.6 17h-17.9l14.5 10.5-5.5 17 14.5-10.5 14.4 10.5-5.5-17 14.5-10.5h-18zm-55.7-16.7-5.5 17h-18l14.6 10.5-5.6 17 14.5-10.5 14.5 10.6-5.6-17 14.5-10.6h-17.9zm-55.7-16.7-5.5 17h-17.9l14.5 10.6-5.5 17 14.4-10.6 14.5 10.6-5.5-17 14.5-10.6h-18z"
      />
      <path
        fill="#ffda44"
        d="M300.5 267.1 256 211.5l-22.3 11.1V245l-33.4 22h-22.2v29a89 89 0 0 1 55.6 82.5H256v-22.2l22.3-22.3 22.2 22.3 22.3-22.3v-22.2l22.2-33.4-44.5-11.2z"
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
