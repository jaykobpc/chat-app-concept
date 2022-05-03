import { createApp } from "vue";
import App from "./App.vue";
import store from './store/store';
import router from "./router/index";

import "boxicons/css/boxicons.min.css";
import "animate.css"
import 'swiper/css';

createApp(App).use(router).use(store).mount('#app');

