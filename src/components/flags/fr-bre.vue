<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="1d95aa2c-2038-4468-88c3-f239036ab8cf">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#1d95aa2c-2038-4468-88c3-f239036ab8cf)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path
        fill="#eee"
        d="M0 0h256l256 57v57l-32 28 32 29v57l-32 28 32 29v56l-32 29 32 28v57l-256 29L0 455v-57l32-28-32-29v-56l32-29-32-28Z"
      />
      <path
        fill="#333"
        d="M256 0h256v57H256zm0 114h256v57H256zM0 228h512v57H0zm0 113h512v57H0zm0 114h512v57H0zM16 72l19 14 19-14-19-40z"
      />
      <circle cx="46.7" cy="32.4" r="6" fill="#333" />
      <circle cx="22.7" cy="32.4" r="6" fill="#333" />
      <circle cx="34.7" cy="20.4" r="6" fill="#333" />
      <path fill="#333" d="m109 72 19 14 19-14-19-40z" />
      <circle cx="140.4" cy="32.4" r="6" fill="#333" />
      <circle cx="116.4" cy="32.4" r="6" fill="#333" />
      <circle cx="128.4" cy="20.4" r="6" fill="#333" />
      <path fill="#333" d="m203 72 19 14 19-14-19-40z" />
      <circle cx="234.1" cy="32.4" r="6" fill="#333" />
      <circle cx="210.1" cy="32.4" r="6" fill="#333" />
      <circle cx="222.1" cy="20.4" r="6" fill="#333" />
      <path fill="#333" d="m156 138 19 14 19-14-19-40z" />
      <circle cx="187.2" cy="98.2" r="6" fill="#333" />
      <circle cx="163.2" cy="98.2" r="6" fill="#333" />
      <circle cx="175.2" cy="86.2" r="6" fill="#333" />
      <path fill="#333" d="m63 138 19 14 18-14-18-40z" />
      <circle cx="93.5" cy="98.2" r="6" fill="#333" />
      <circle cx="69.5" cy="98.2" r="6" fill="#333" />
      <circle cx="81.5" cy="86.2" r="6" fill="#333" />
      <path fill="#333" d="m16 204 19 14 19-14-19-40z" />
      <circle cx="46.7" cy="164" r="6" fill="#333" />
      <circle cx="22.7" cy="164" r="6" fill="#333" />
      <circle cx="34.7" cy="152" r="6" fill="#333" />
      <path fill="#333" d="m109 204 19 14 19-14-19-40z" />
      <circle cx="140.4" cy="164" r="6" fill="#333" />
      <circle cx="116.4" cy="164" r="6" fill="#333" />
      <circle cx="128.4" cy="152" r="6" fill="#333" />
      <path fill="#333" d="m203 204 19 14 19-14-19-40z" />
      <circle cx="234.1" cy="164" r="6" fill="#333" />
      <circle cx="210.1" cy="164" r="6" fill="#333" />
      <circle cx="222.1" cy="152" r="6" fill="#333" />
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
