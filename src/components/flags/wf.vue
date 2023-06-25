<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_wf"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
    <g mask="url(#c_m_wf)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#d80027" d="M256 0h256v512H0V256Z" />
      <path fill="#eee" d="M0 0h256v256H0Z" />
      <path fill="#0052b4" d="M0 0h75v224H0Z" />
      <path fill="#d80027" d="M149 0h75v224h-75z" />
      <path
        fill="#eee"
        d="m384 232-72-72h144zm-24 24-72-72v144zm24 24-72 72h144zm24-24 72-72v144z"
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
