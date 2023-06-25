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
        d="M144.7 0h222.6l37 257.7-37 254.3H144.7l-42.4-255.2z"
      />
      <path fill="#496e2d" d="M367.3 0H512v512H367.3z" />
      <path fill="#333" d="M0 0h144.7v512H0z" />
      <g fill="#ffda44">
        <path
          d="M256 167a89 89 0 1 0 0 178 89 89 0 0 0 0-178zm0 144.7a55.7 55.7 0 1 1 0-111.4 55.7 55.7 0 0 1 0 111.4z"
        />
        <path
          d="M256 222.6c-12.3 0-22.3 10-22.3 22.3v33.4h44.6v-33.4c0-12.3-10-22.3-22.3-22.3z"
        />
      </g>
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
