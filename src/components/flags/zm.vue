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
      <path fill="#496e2d" d="M0 0h512v256L256 512H0z" />
      <path
        fill="#ff9811"
        d="M473 167h-66.7a22.3 22.3 0 0 0-44.6 0H295a23 23 0 0 0 23 22.2h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.2z"
      />
      <path
        fill="#333"
        d="M341.3 256h85.4l21.1 126.3L426.7 512h-85.4l-23.5-128z"
      />
      <path fill="#d80027" d="M256 256h85.3v256H256z" />
      <path fill="#ff9811" d="M426.7 256H512v256h-85.3z" />
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
