<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="24aaee14-b08f-4933-9ccd-24f8f7f686df">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#24aaee14-b08f-4933-9ccd-24f8f7f686df)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#d80027" d="M0 110.2 110.2 0H512v401.8L401.8 512H0z" />
      <path fill="#eee" d="M110.2 0H63L0 63v47.2L401.8 512H449l63-63v-47.2z" />
      <path fill="#333" d="M512 512v-63L63 0H0v63l449 449z" />
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
