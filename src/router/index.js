import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sections',
      name: 'sections',

      children: [
        {
          path: '/new-section',
          name: 'new-section',
          component: () => import('@/components/Forms/SectionForm.vue')
        },
        {
          path: '/sections',
          name: 'sections',
          component: () => import('../views/SectionsView.vue')
        }
      ]
    },
    {
      path: '/books',
      name: 'books',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BooksView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      children: [
        {
          path: '/login',
          component: () => import('../components/Forms/LoginForm.vue')
        },
        {
          path: '/register',
          component: () => import('../components/Forms/RegisterForm.vue')
        }
      ]
    }
  ]
})

export default router
