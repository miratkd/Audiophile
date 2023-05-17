import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/headphones',
    name: 'headphones',
    component: () => import('../views/HeadphonesView.vue')
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('../views/SpeakersView.vue')
  },
  {
    path: '/fones',
    name: 'phones',
    component: () => import('../views/PhonesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
