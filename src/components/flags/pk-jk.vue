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
      <path fill="#ff9811" d="M0 0h224l32 88-32 88-96 32L0 176Z" />
      <path
        fill="#eee"
        d="m0 224 256-32 256 32v48l-32 24 32 24v48l-32 24 32 24v48l-256 32L0 464v-48l32-24-32-24v-48l32-24-32-24Z"
      />
      <path
        fill="#496e2d"
        d="M224 0v176H0v48h512V0ZM0 272v48h512v-48zm0 96v48h512v-48zm0 96v48h512v-48z"
      />
      <circle cx="355.6" cy="110.2" r="80.5" fill="#eee" />
      <circle cx="376.2" cy="91.9" r="73.8" fill="#496e2d" />
      <path fill="#eee" d="m370 76 47-20-27 44-4-50 34 38z" />
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
