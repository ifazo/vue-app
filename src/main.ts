import './style.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import ToastService from 'primevue/toastservice';

const app = createApp(App)

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
app.use(ToastService);
app.use(createPinia())
app.use(router)

app.mount('#app')
