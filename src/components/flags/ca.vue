<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="16e26b43-482c-408a-bdc0-520e3092324b">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#16e26b43-482c-408a-bdc0-520e3092324b)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#d80027"
        d="M0 0v512h144l112-64 112 64h144V0H368L256 64 144 0Z"
      />
      <path fill="#eee" d="M144 0h224v512H144Z" />
      <path
        fill="#d80027"
        d="m301 289 44-22-22-11v-22l-45 22 23-44h-23l-22-34-22 33h-23l23 45-45-22v22l-22 11 45 22-12 23h45v33h22v-33h45z"
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
  import { computed } from 'vue';

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

  const svgSize = computed(() => 512 + 2 * props.strokeWidth),
    viewBoxOrigin = computed(() => -props.strokeWidth),
    circleStroke = computed(() => 256 + props.strokeWidth / 2);
</script>
