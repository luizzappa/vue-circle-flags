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
      <path fill="#ffda44" d="M0 85v342l256 31 256-31V85L256 53Z" />
      <path fill="#333" d="M0 0h512v85H0z" />
      <path fill="#d80027" d="M0 171h512v85l-256 31L0 256Z" />
      <path fill="#333" d="M0 256h512v85H0z" />
      <path fill="#d80027" d="M0 427h512v85H0z" />
      <circle cx="256" cy="256" r="85.3" fill="#eee" />
      <path
        fill="#333"
        d="m287 260-31-13 8-26a17 17 0 0 0-5-16l8-8a28 28 0 0 0-19-8 28 28 0 0 0-20 8l8 8a17 17 0 0 0-5 12l1 5-12 12h21s-9 13-14 24c-4 11 0 25 12 30l6 2 11 10v12l-11 11h22v-23l10-10h21a22 22 0 0 0-11-30z"
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
