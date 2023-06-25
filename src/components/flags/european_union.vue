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
      <path fill="#0052b4" d="M0 0h512v512H0z" />
      <path
        fill="#ffda44"
        d="m256 100.2 8.3 25.5H291l-21.7 15.7 8.3 25.6-21.7-15.8-21.7 15.8 8.3-25.6-21.7-15.7h26.8zm-110.2 45.6 24 12.2 18.9-19-4.2 26.5 23.9 12.2-26.5 4.2-4.2 26.5-12.2-24-26.5 4.3 19-19zM100.2 256l25.5-8.3V221l15.7 21.7 25.6-8.3-15.8 21.7 15.8 21.7-25.6-8.3-15.7 21.7v-26.8zm45.6 110.2 12.2-24-19-18.9 26.5 4.2 12.2-23.9 4.2 26.5 26.5 4.2-24 12.2 4.3 26.5-19-19zM256 411.8l-8.3-25.5H221l21.7-15.7-8.3-25.6 21.7 15.8 21.7-15.8-8.3 25.6 21.7 15.7h-26.8zm110.2-45.6-24-12.2-18.9 19 4.2-26.5-23.9-12.2 26.5-4.2 4.2-26.5 12.2 24 26.5-4.3-19 19zM411.8 256l-25.5 8.3V291l-15.7-21.7-25.6 8.3 15.8-21.7-15.8-21.7 25.6 8.3 15.7-21.7v26.8zm-45.6-110.2-12.2 24 19 18.9-26.5-4.2-12.2 23.9-4.2-26.5-26.5-4.2 24-12.2-4.3-26.5 19 19z"
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
