<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-circle-flags"
    :viewBox="`${viewBoxOrigin} ${viewBoxOrigin} ${svgSize} ${svgSize}`"
  >
    <mask id="d0417b1c-0e5a-4d93-894d-4f70edf8252b">
      <circle cx="256" cy="256" r="256" fill="#fff" />
    </mask>
    <g mask="url(#d0417b1c-0e5a-4d93-894d-4f70edf8252b)">
      <title v-if="props.flagName">{{ props.flagName }}</title>
      <path fill="#338af3" d="M160 0h352v512H160l-32-256z" />
      <path fill="#eee" d="m0 160 80-32 80 32v192l-80 32-80-32z" />
      <rect width="160" height="160" fill="#d80027" ry="0" />
      <path fill="#6da544" d="M160 21V0h-20L0 139v21h20z" />
      <path fill="#6da544" d="M0 21V0h20l140 139v21h-20z" />
      <path fill="#eee" d="M0 64h160v32H0z" />
      <path fill="#eee" d="M64 0h32v160H64z" />
      <path fill="#d80027" d="M0 512h160V352H0z" />
      <path
        fill="#ffda44"
        d="M340 146v158h-40c-24 0-24-32-24-32h-96v32h20l147 32 145-32v-24h-80s0 24-24 24h-32V146z"
      />
      <path
        fill="#ffda44"
        d="M356 138v32c-31-11-61 8-80-32 33 23 51-10 80 0zm-72 46s-24 24-16 72h-72s32-56 88-72zm16 104h95c-31-48 0-104 0-104h-95s-40 56 0 104zm101-24a96 96 0 0 1 4-64h63s-16 32-1 64zm-101 40h192s-8 0-16 24-16 48-56 48H276c-39 0-52-50-76-72z"
      />
      <rect
        width="96"
        height="32"
        x="32"
        y="384"
        fill="#ffda44"
        rx="16"
        ry="16"
      />
      <rect
        width="96"
        height="32"
        x="32"
        y="448"
        fill="#ffda44"
        rx="16"
        ry="16"
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
