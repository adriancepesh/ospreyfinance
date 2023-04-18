import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/modules/store";
import PrimeVue from 'primevue/config';
import './assets/app.css'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

const app = createApp(App)
app.use(PrimeVue);
app.use(router)
app.use(store)
app.mount('#app')
