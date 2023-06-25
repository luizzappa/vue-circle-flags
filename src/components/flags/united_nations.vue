<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_united_nations">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#c_m_united_nations)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#338af3" d="M0 0h512v512H0z" />
      <circle cx="256" cy="256" r="145" fill="#eee" />
      <circle cx="256" cy="256" r="111" fill="#338af3" />
      <path fill="#338af3" d="M76 76h360L256 256z" />
      <circle cx="256" cy="256" r="89" fill="#eee" />
      <circle cx="256" cy="256" r="69" fill="#338af3" />
      <path fill="#eee" d="M246 178h20v156h-20z" />
      <path fill="#eee" d="M334 246v20H178v-20z" />
      <path fill="#eee" d="m304 193.7 14.2 14.2-110.3 110.3-14.2-14.1z" />
      <path fill="#eee" d="m318.2 304-14.1 14.2-110.4-110.3 14.2-14.2z" />
      <circle cx="256" cy="256" r="44" fill="#eee" />
      <circle cx="256" cy="256" r="22" fill="#338af3" />
      <ellipse cx="256" cy="412" fill="#eee" rx="44" ry="40" />
      <path fill="#338af3" d="m256 407-78 63h156z" />
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
