import type { App } from 'vue';
import { CircleFlags } from '@/components';

export default {
  install: (app: App) => {
    app.component('CircleFlags', CircleFlags);
  }
};

export { CircleFlags };
