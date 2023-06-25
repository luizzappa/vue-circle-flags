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
        fill="#ffda44"
        d="m0 378.4 252.9-28.8L512 378.4V512H322.8L256 481l-66.8 31H0z"
      />
      <path fill="#6da544" d="m0 256 249.8-28L512 256v122.4H0z" />
      <path fill="#eee" d="m0 133.6 255.3-28.3L512 133.6V256H0z" />
      <path fill="#0052b4" d="M0 0h189.2L256 30l66.8-30H512v133.6H0z" />
      <path
        fill="#ffda44"
        d="m137.7 55.7 6.9 21.2H167L148.9 90l6.9 21.3-18.1-13.1-18 13.1 6.8-21.3-18-13h22.3z"
      />
      <path fill="#d80027" d="M189.2 0h133.6v512H189.2z" />
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
