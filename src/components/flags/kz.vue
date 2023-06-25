<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask :id="`${maskId}`">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g :mask="`url(#${maskId})`">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#338af3" d="M0 0h512v512H0z" />
      <path
        fill="#ffda44"
        d="M400.7 258.8H111.3c0 20 17.4 36.2 37.4 36.2h-1.2c0 20 16.2 36.1 36.2 36.1 0 20 16.1 36.2 36.1 36.2h72.4c20 0 36.1-16.2 36.1-36.2 20 0 36.2-16.2 36.2-36.1h-1.2c20 0 37.4-16.2 37.4-36.2z"
      />
      <path fill="#338af3" d="M356.2 211.5a100.2 100.2 0 0 1-200.4 0" />
      <path
        fill="#ffda44"
        d="m332.5 211.5-31.3 14.7 16.7 30.3-34-6.5-4.3 34.3L256 259l-23.6 25.3L228 250l-34 6.5 16.6-30.3-31.2-14.7 31.2-14.7-16.6-30.3 34 6.5 4.3-34.3 23.6 25.2 23.6-25.2L284 173l34-6.5-16.6 30.3z"
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
  import { computed, ref, onMounted } from 'vue';

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

  const maskId = ref<string>();

  const svgSize = computed(() => 512 + 2 * props.strokeWidth),
    viewBoxOrigin = computed(() => -props.strokeWidth),
    circleStroke = computed(() => 256 + props.strokeWidth / 2);

  onMounted(() => (maskId.value = window.crypto.randomUUID()));
</script>
