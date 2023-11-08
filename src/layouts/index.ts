import AppLayout from '@/layouts/AppLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import 'vue-router'

export default {
  AppLayout,
  AuthLayout,
  BlankLayout
}

// Declare meta field type
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean
    layout: string
  }
}
