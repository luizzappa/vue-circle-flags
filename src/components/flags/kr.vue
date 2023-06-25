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
      <path fill="#eee" d="M0 0h512v512H0Z" />
      <path
        fill="#333"
        d="m350 335 24-24 16 16-24 23zm-39 39 24-24 15 16-23 24zm87 8 23-24 16 16-24 24zm-40 39 24-23 16 15-24 24Zm16-63 24-23 15 15-23 24zm-39 40 23-24 16 16-24 23zm63-221-63-63 15-15 64 63zm-63-15-24-24 16-16 23 24zm39 39-24-24 16-15 24 23zm8-87-24-23 16-16 24 24Zm39 40-23-24 15-16 24 24ZM91 358l63 63-16 16-63-63zm63 16 23 24-15 15-24-23zm-40-39 24 23-16 16-23-24zm24-24 63 63-16 16-63-63zm16-220-63 63-16-16 63-63zm23 23-63 63-15-16 63-63zm24 24-63 63-16-16 63-63z"
      />
      <path fill="#d80027" d="M319 319 193 193a89 89 0 1 1 126 126z" />
      <path fill="#0052b4" d="M319 319a89 89 0 1 1-126-126z" />
      <circle cx="224.5" cy="224.5" r="44.5" fill="#d80027" />
      <circle cx="287.5" cy="287.5" r="44.5" fill="#0052b4" />
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
