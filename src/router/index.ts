import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => LandingView,
      meta: {
        requiresAuth: false,
        layout: 'BlankLayout'
      }
    },
    {
      path: '/login',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/auth/LoginView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'AuthLayout'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'AuthLayout'
      }
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import('@/views/auth/ForgotPasswordView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'AuthLayout'
      }
    },
    {
      path: '/password-reset-request-sent',
      name: 'passwordResetRequestSent',
      component: () => import('@/views/auth/PasswordResetRequestSentView.vue'),
      meta: {
        requiresAuth: false,
        layout: 'AuthLayout'
      }
    }
  ]
})

export default router
