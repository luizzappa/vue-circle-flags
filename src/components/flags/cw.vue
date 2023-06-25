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
        fill="#0052b4"
        d="M0 0h512v342.3l-22 34.2 22 32.5v103H0V409l25.4-31L0 342.2z"
      />
      <path
        fill="#eee"
        d="m175.2 164.2 13.8 42.5h44.7L197.6 233l13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7zm-76.7-44.5 8.2 25.5h26.9L111.9 161l8.3 25.5-21.7-15.7-21.7 15.7L85 161l-21.7-15.7h26.9z"
      />
      <path fill="#ffda44" d="M0 342.3h512V409H0z" />
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
