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
      children: [
        {
          path: '',
          component: () => import('@/views/SectionsView.vue'),
          name: 'sections'
        },
        {
          path: 'new',
          component: () => import('@/components/Forms/SectionForm.vue'),
          props: { isNew: true }
        },
        {
          path: ':id/edit',
          component: () => import('@/components/Forms/SectionForm.vue'),
          name: 'sectionEdit',
          props: (route) => ({
            isNew: false,
            id: route.params.id
          })
        }
      ]
    },
    {
      path: '/simple-form',
      name: 'simpleForm',
      component: () => import('../views/SimpleForm.vue')
    },
    {
      path: '/books',
      children: [
        { path: '', component: () => import('@/views/BooksView.vue') },
        { path: 'new', component: () => import('@/components/Forms/BooksForm.vue') }
      ]
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/UsersView.vue')
    },
    {
      path: '/login',
      // name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('@/views/LoginView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/components/Forms/LoginForm.vue')
        },
        {
          path: '/register',
          component: () => import('@/components/Forms/RegisterForm.vue')
        }
      ]
    }
  ]
})

export default router
