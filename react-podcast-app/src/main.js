import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Seasons from './Pages/Seasons.vue'
import EpisodeDetail from './Pages/EpisodeDetail.vue'
import About from './Pages/About.vue'
import '@fortawesome/fontawesome-free/css/all.min.css';



const routes = [
  { path: '/', component: Home },
  { path: '/seasons', component: Seasons },
  { path: '/episode/:id', component: EpisodeDetail },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
