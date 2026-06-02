import { createApp } from 'vue';
import App from './App.vue';
import CircleFlags from 'vue-circle-flags';
import 'vue-circle-flags/dist/vue-circle-flags.css';

const app = createApp(App);

app.use(CircleFlags);

app.mount('#app');
