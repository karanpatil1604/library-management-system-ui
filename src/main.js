import './assets/main.css'
import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
