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
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <path fill="#0052b4" d="M256 70 5 256l251 186 251-186Z" />
      <path
        fill="#eee"
        d="M256 130 85 256l171 126 171-126Zm-13.4-5.7 34.7-25h-42.7l34.7 25L256 83.7ZM46.5 277.4l27.2-33.1-41.4 11.1 40.1 15L49 234.6Zm419 0-27.2-33.1 41.4 11.1-40.1 15 23.4-35.8zm-145.7-104 27.2-33.1-41.4 11.1 40.1 15-23.4-35.8zm70.3 52 27.2-33.1-41.4 11.1 40.1 15-23.4-35.8zm-197.9-52L165 140.3l41.4 11.1-40.1 15 23.4-35.8zm-70.3 52-27.2-33.1 41.4 11.1-40.1 15 23.4-35.8zm-13 104 27.2-33.1-41.5 11.1 40.2 15-23.4-35.8zm70.3 52 27.2-33.1-41.4 11.1 40.1 15-23.4-35.8zm63.5 46.9 34.7-24.9h-42.7l34.7 24.9-13.3-40.6zm160.4-98.9-27.2-33.1 41.5 11.1-40.2 15 23.4-35.8zm-70.3 52-27.2-33.1 41.4 11.1-40.1 15 23.4-35.8z"
      />
      <path
        fill="#0052b4"
        d="m242.7 204.7 34.7-25h-42.7l34.7 25-13.3-40.7zm-39.2 103 34.7-25h-42.7l34.7 25-13.3-40.7zm78.2 0 34.7-25h-42.7l34.7 25-13.3-40.7zm-39.1-4.4 34.7 25h-42.7l34.7-25L256 344ZM160 223h192v32H160z"
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
