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
        fill="#d80027"
        d="M0 0h104l152 64L408 0h104v512H408l-152-64-152 64H0Z"
      />
      <path
        fill="#ff9811"
        d="M104 0h24l128 64L384 0h24v512h-24l-128-64-128 64h-24z"
      />
      <path fill="#0052b4" d="M128 0h256v512H128Z" />
      <path
        fill="#eee"
        d="m198 155 3 16-14 9 16 1 4 16 7-15 16 2-12-11 6-15-14 8-12-11zm116 0-12 11-14-8 7 15-13 11 17-2 6 15 4-16 16-1-14-8 3-17zm-134 32-8 14-17-3 11 12-8 14 15-6 11 12-2-17 15-6-16-4-1-16zm153 0-2 16-16 4 15 6-2 17 11-12 15 6-8-14 11-12-16 3-8-14zm-77 21a16 16 0 0 0-16 16 16 16 0 0 0 2 8 16 16 0 0 0-6-6 16 16 0 0 0-8-2 16 16 0 0 0-14 8 16 16 0 0 0 6 22 16 16 0 0 0 8 2 16 16 0 0 0-8 2 16 16 0 0 0-6 22 16 16 0 0 0 22 6 16 16 0 0 0 6-6 16 16 0 0 0-2 8 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-2-8 16 16 0 0 0 6 6 16 16 0 0 0 22-6 16 16 0 0 0-6-22 16 16 0 0 0-8-2 16 16 0 0 0 8-2 16 16 0 0 0 6-22 16 16 0 0 0-13-8 16 16 0 0 0-9 2 16 16 0 0 0-6 6 16 16 0 0 0 2-8 16 16 0 0 0-16-16zm-100 27v16l-16 5 16 5v16l9-13 16 5-10-13 10-13-16 5-9-13zm201 0-10 13-15-5 9 13-9 13 15-5 10 13v-16l15-5-15-5v-16zm-173 47-11 12-15-6 8 14-11 12 17-3 8 14 1-16 16-4-15-6 2-17zm144 0 2 17-15 6 16 4 1 16 9-14 16 3-11-12 8-14-15 7-11-13zm-130 40-11 12a104 104 0 0 0 138 0l-11-12a88 88 0 0 1-116 0z"
      />
      <path
        fill="#ff9811"
        d="m256 140-5 15h-16l13 10-5 15 13-9 13 9-5-15 13-10h-16l-5-15zm0 100a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16z"
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
