<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="d79154d5-59ed-4e55-9863-17ce3c3122a5">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#d79154d5-59ed-4e55-9863-17ce3c3122a5)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#ffda44"
        d="M0 256 256 0h256v56.8l-14.7 29.8 14.7 27.2v56.8L496.2 199l15.8 28.6v56.8l-18.4 29.4 18.4 27.5v56.9L495.3 427l16.7 28.1V512H0v-56.9l24.2-27.4L0 398.2v-56.9l21-27.7-21-29.2z"
      />
      <path
        fill="#d80027"
        d="M242 56.8v57h270v-57zm0 113.8v57h270v-57zM0 284.4v56.9h512v-56.9zm0 113.8v56.9h512v-56.9z"
      />
      <path fill="#4a1f63" d="M0 0h256v256H0z" />
      <path
        fill="#eee"
        d="M211.5 133.6v22.2h-11.2v-22.2h-22.2v22.2H167v-44.5h-44.6v44.5h-11v-22.2H89v22.2H78v-22.2H55.6v66.7h178v-66.7z"
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
