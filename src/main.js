import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import Spinner from './components/Spinner.vue'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(VueLazyLoad, {
  // options...
})
app.component('Spinner', Spinner)
app.mount('#app')
