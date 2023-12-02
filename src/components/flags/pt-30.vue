<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="fdb68cf1-e404-4fef-bf55-a32f01a2e1c3">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#fdb68cf1-e404-4fef-bf55-a32f01a2e1c3)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#0052b4"
        d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"
      />
      <path fill="#ffda44" d="M144.7 0h222.6v512H144.7z" />
      <path
        fill="#d80027"
        d="m328.4 278.3 16.7 22.2v-89l-16.7 22.2h-50v-50l22.2-16.7h-89l22.2 16.7v50h-50l-16.7-22.2v89l16.7-22.2h50v50L211.6 345h89l-22.2-16.7v-50z"
      />
      <path
        fill="#eee"
        d="M323 244.9h-56v-55.7h-22V245h-55.7v22H245v55.7h22V267h55.7z"
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
