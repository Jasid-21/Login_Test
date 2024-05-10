import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import App from './App.vue'
import router from './router'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash, faCheck, faX);

const pinia = createPinia();
const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(pinia);
app.use(router);
app.mount('#app');
