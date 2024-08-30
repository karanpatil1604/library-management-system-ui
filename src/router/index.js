import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { jwtDecode } from 'jwt-decode'

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken')
}
const isAdmin = () => {
  return jwtDecode(localStorage.getItem('authToken')).role === 'admin'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated() && isAdmin()) {
          next()
        } else {
          next({ name: 'books' })
        }
      }
    },
    {
      path: '/requests',
      children: [
        {
          path: '',
          component: () => import('@/views/RequestsView.vue'),
          name: 'requests'
        }
      ]
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
      path: '/books',
      children: [
        {
          path: '',
          component: () => import('@/views/BooksView.vue'),
          name: 'books',
          props: null
        },
        {
          path: 'new',
          component: () => import('@/components/Forms/BooksForm.vue'),
          props: { isNew: true },
          beforeEnter: (to, from, next) => {
            if (isAdmin()) {
              next()
            } else {
              next({ name: 'login' })
            }
          }
        },
        {
          path: ':id/edit',
          name: 'bookEdit',
          component: () => import('@/components/Forms/BooksForm.vue'),
          props: (route) => ({ isNew: false, id: route.params.id }),
          beforeEnter: (to, from, next) => {
            if (isAdmin()) {
              next()
            } else {
              next({ name: 'login' })
            }
          }
        },
        {
          path: ':id',
          name: 'bookDetail',
          component: () => import('@/views/BookDetail.vue'),
          props: (route) => ({ id: route.params.id })
        }
      ]
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/UsersView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) {
          next()
        } else {
          next({ name: 'login' })
        }
      }
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
          name: 'login',
          component: () => import('@/views/LoginView.vue'),
          beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
              next()
            } else {
              next({ name: 'home' })
            }
          }
        },
        {
          path: '/register',
          name: 'register',
          beforeEnter: (to, from, next) => {
            if (!isAuthenticated()) {
              next()
            } else {
              next({ name: 'home' })
            }
          },

          component: () => import('@/components/Forms/RegisterForm.vue')
        }
      ]
    }
  ]
})

export default router
