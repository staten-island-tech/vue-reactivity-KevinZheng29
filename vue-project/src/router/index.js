import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/character',
      name: '/characterpage',
      component: () => import('../views/GameHome.vue')
    },
    {
      path: '/playgame',
      name: '/game',
      component: () => import('../views/PlayGame.vue')
    }
  ]
})

export default router
