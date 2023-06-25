<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="c_m_wiphala">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#c_m_wiphala)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#eee" d="M0 73V0h73l439 439v73h-73Z" />
      <path
        fill="#ffda44"
        d="M73 0v73h73v73h73v73h74v74h73v73h73v73h73v-73l-73-73-73-73v-1l-73-73-74-73-73-73H73z"
      />
      <path
        fill="#ff9811"
        d="M146 0v73h73v73h74v73h73v74h73v73h73v-73l-73-74L293 73 219 0h-73z"
      />
      <path
        fill="#d80027"
        d="M219 0v73h74v73h73v73h73v74h73v-74l-73-73-73-73-73-73h-74z"
      />
      <path fill="#4a1f63" d="M293 0v73h73v73h73v73h73v-73l-73-73-73-73h-73z" />
      <path fill="#0052b4" d="M366 0v73h73v73h73V73L439 0h-73z" />
      <path
        fill="#6da544"
        d="M439 0v73h73V0Zm0 512v-73h-74v-73h-73v-73h-73v-74h-73v-73H73V73H0v73l73 73 73 73v1l73 73 73 73 73 73z"
      />
      <path
        fill="#0052b4"
        d="M366 512v-73h-74v-73h-73v-73h-73v-74H73v-73H0v73l73 74 146 146 73 73z"
      />
      <path
        fill="#4a1f63"
        d="M292 512v-73h-73v-73h-73v-73H73v-74H0v74l73 73 73 73 73 73z"
      />
      <path fill="#d80027" d="M219 512v-73h-73v-73H73v-74H0v74l73 73 73 73z" />
      <path fill="#ff9811" d="M146 512v-73H73v-73H0v73l73 73z" />
      <path fill="#ffda44" d="M73 512v-73H0v73z" />
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
