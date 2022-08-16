import { createApp } from 'vue';
import App from './App.vue';
import router from 'router/routes';
import { createPinia } from 'pinia';

import { init } from 'api/sse';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');

init();
