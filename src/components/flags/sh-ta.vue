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
      <path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
      <path
        fill="#eee"
        d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8zm32-144 48-80 48 80z"
      />
      <circle cx="368" cy="144" r="48" fill="#338af3" />
      <path fill="#338af3" d="M320 144v48l48 32 48-32v-48z" />
      <rect
        width="32"
        height="128"
        x="288"
        y="128"
        fill="#ff9811"
        rx="16"
        ry="16"
      />
      <rect
        width="32"
        height="128"
        x="416"
        y="128"
        fill="#ff9811"
        rx="16"
        ry="16"
      />
      <path
        fill="#eee"
        d="M320 192v29c0 36 48 48 48 48s48-12 48-48v-29zm48-48-16 48h32z"
      />
      <path fill="#338af3" d="m352 192 16 48 16-48z" />
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
