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
      <path
        fill="#eee"
        d="M0 0h171l85 32 85-32h171v171l-32 85 32 85v171H341l-85-32-85 32H0V341l32-85-32-85Z"
      />
      <path fill="#d80027" d="M171 0h170v512H171z" />
      <path fill="#0052b4" d="M512 171v170H0V171z" />
      <path
        fill="#eee"
        d="m236 247 52-37h-64l52 37-20-61zm-45 79 52-37h-64l52 37-20-61zm90 0 52-37h-64l52 37-20-61zm74-47 52-37h-64l52 37-20-61zm-238 0 52-37h-64l52 37-20-61z"
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
