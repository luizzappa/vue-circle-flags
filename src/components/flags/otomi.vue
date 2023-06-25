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
      <path fill="#ff9811" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <path fill="#eee" d="m0 160 256-32 256 32v32H0Z" />
      <path fill="#338af3" d="M0 0h512v160H0Z" />
      <path fill="#eee" d="m0 352 256 32 256-32v-32H0Z" />
      <path fill="#6da544" d="M0 352h512v160H0Z" />
      <circle cx="256" cy="256" r="160" fill="#eee" />
      <circle cx="256" cy="256" r="128" fill="#338af3" />
      <path
        fill="#ff9811"
        d="M207 139v68h-68l49 49-49 49h68v68l49-49 49 49v-68h68l-49-49 49-49h-68v-68l-49 49z"
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
