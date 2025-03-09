import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(createPinia());
app.mount('#app');