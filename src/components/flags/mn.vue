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
        fill="#a2001d"
        d="M0 0h167l84.9 45L345 0h167v512H345l-87.7-48.1L167 512H0z"
      />
      <path fill="#0052b4" d="M167 0h178v512H167z" />
      <g fill="#ffda44">
        <path d="M122.4 256h22.3v89h-22.3zm-89 0h22.3v89H33.4z" />
        <circle cx="89" cy="289.4" r="22.3" />
        <circle cx="89" cy="211.5" r="11.1" />
        <path
          d="M66.8 322.8h44.5V345H66.8zm0-89h44.5V256H66.8zM89 133.5l8 24.2h25.4l-20.6 15 7.9 24.3L89 182l-20.6 15 7.9-24.3-20.6-15h25.5z"
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
