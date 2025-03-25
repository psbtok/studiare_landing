import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/privacy', component: PrivacyView}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
