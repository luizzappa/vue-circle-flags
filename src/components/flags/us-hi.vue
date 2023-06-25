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
        d="M0 256V96l32-32L0 32V0h32l32 32L96 0h416v64l-32 64 32 64v64l-32 64 32 64v64l-256 32L0 448v-64l32-64z"
      />
      <path
        fill="#0052b4"
        d="m173 128 83 83v-19h256v-64L384 96l-128 32Zm-45 45v83h83zM0 320v64h512v-64l-256-32Z"
      />
      <path
        fill="#d80027"
        d="M32 0v32H0v64h32v160H0v64h512v-64H96V96h160v32h256V64H256V32H96V0H32zm224 256v-31l-97-97h-31l128 128zM0 448v64h512v-64H0z"
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
