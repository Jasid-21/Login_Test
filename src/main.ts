import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App.vue'
import router from './router'
import { faEye } from '@fortawesome/free-regular-svg-icons';

library.add(faEye);

const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(router);
app.mount('#app');
