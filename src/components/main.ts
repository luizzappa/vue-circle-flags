import type { App } from 'vue';
import { CircleFlags } from '@/components';
import { countryCodes, countryList } from '@/defs/country';

export default {
  install: (app: App) => {
    app.component('CircleFlags', CircleFlags);
  }
};

export { CircleFlags, countryCodes, countryList };
