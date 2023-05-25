<template>
  <div
    :class="{
      'circle-flags': true,
      'circle-flags-small': props.size === 'small',
      'circle-flags-medium': props.size === 'medium',
      'circle-flags-large': props.size === 'large'
    }"
  >
    <component
      :is="icon"
      :strokeWidth="strokeWidth"
      :strokeColor="strokeColor"
      :flagName="flagName"
    ></component>
  </div>
</template>

<script setup lang="ts">
  // 3rd's
  import { computed, defineAsyncComponent } from 'vue';

  // locals
  import { TCountryCodes, countryList } from '@/defs/country';
  import unknownFlag from '@/components/flags/xx.vue';

  const props = withDefaults(
    defineProps<{
      country: TCountryCodes;
      showFlagName?: boolean;
      newFlagName?: string;
      size?: 'small' | 'medium' | 'large' | '';
      strokeWidth?: number;
      strokeColor?: string;
    }>(),
    {
      showFlagName: true,
      size: 'medium'
    }
  );

  const countryCode = computed(() => {
      const currCode = props.country.toLocaleLowerCase() as TCountryCodes;
      return countryList[currCode]?.ref;
    }),
    flagName = computed(() =>
      props.showFlagName
        ? props.newFlagName ??
          countryList[countryCode.value as TCountryCodes]?.name
        : undefined
    );

  const flagIcon = () =>
    defineAsyncComponent({
      loader: () => import(`@/components/flags/${countryCode.value}.vue`),
      loadingComponent: unknownFlag,
      errorComponent: unknownFlag,
      delay: 200
    });

  const icon = computed(() => (countryCode.value ? flagIcon() : unknownFlag));
</script>

<style>
  .circle-flags-small {
    height: 32px;
    width: 32px;
  }
  .circle-flags-medium {
    height: 62px;
    width: 62px;
  }
  .circle-flags-large {
    height: 92px;
    width: 92px;
  }
</style>
