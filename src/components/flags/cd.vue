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
      <path fill="#338af3" d="M0 0h401.9L512 110.3V512H110.3L0 401.9z" />
      <path
        fill="#ffda44"
        d="M401.9 0 0 401.9V449l63 63h47.3L512 110.3V63L449 0z"
      />
      <path fill="#d80027" d="M449 0 0 449v63h63L512 63V0h-63z" />
      <path
        fill="#ffda44"
        d="m136.4 78 13.8 42.4H195l-36 26.3 13.7 42.5-36.2-26.3-36 26.3 13.7-42.5L78 120.4h44.7z"
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
