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
      <path fill="#0052b4" d="m0 128 256-32 256 32v256l-256 32L0 384Z" />
      <path fill="#333" d="m0 96 256-32 256 32v32H0Z" />
      <path fill="#6da544" d="M0 0h512v96H0Z" />
      <path fill="#333" d="m0 416 256 32 256-32v-32H0Z" />
      <path fill="#6da544" d="M0 512h512v-96H0Z" />
      <path
        fill="#eee"
        d="M245 144c-106 32-101 112-67 186l-40 38 73-27v-98c24-35 66-35 90 0v98l73 27-40-38c34-74 39-154-67-186l-11 46-11-46zm11 83-9 27h-28l23 17-9 28 23-17 23 17-9-28 24-17h-29l-9-27z"
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
