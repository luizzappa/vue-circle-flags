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
      <path
        fill="#eee"
        d="m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
      />
      <path fill="#d80027" d="M0 0h512v144.7H0z" />
      <path fill="#6da544" d="M0 367.3h512V512H0z" />
      <path
        fill="#ffda44"
        d="M211.5 323h89v-38l-17.8 9-26.7-26.9-26.7 26.7-17.8-8.9zm-51-44.6 4.2 12.7H178l-10.9 8 4.2 12.7-10.9-8-10.8 8 4.1-12.8-10.7-7.9h13.4zm12.9-44.6 4.1 12.8H191l-10.8 8 4.1 12.6-10.8-7.9-10.9 8 4.2-12.8-10.9-8h13.4zm36.7-33.4 4.2 12.8h13.4l-10.9 8 4.2 12.6-11-7.7-10.8 7.8 4.1-12.7-10.8-7.9H206zm141.4 78-4.2 12.7H334l10.9 8-4.2 12.7 10.9-8 10.8 8-4.1-12.8 10.7-7.9h-13.4zm-12.9-44.6-4.1 12.8H321l10.8 8-4.1 12.6 10.8-7.9 10.9 8-4.2-12.8 10.9-8h-13.4zM302 200.4l-4.2 12.8h-13.4l10.9 8-4.2 12.6 10.9-7.7 10.8 7.8-4.1-12.7 10.8-7.9H306zm-46-16.6 4.1 12.7h13.5l-10.9 8 4.1 12.6-10.8-7.8-10.8 7.8 4.1-12.7-10.9-7.9H252z"
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
