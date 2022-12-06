import { createRouter, createWebHistory } from 'vue-router'
import accueil from '../views/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: accueil
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('../views/SkillView.vue')
    }
  ]
})

export default router
