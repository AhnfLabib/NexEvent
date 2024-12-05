import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ManagementView from '@/views/ManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

    // landing page
    {
      path: '/',
      name: 'signIn',
      component: SignInView,
    },
    {
      path: '/signUp',
      name: 'signUpView',
      component: SignUpView,
    },
    {
      path: '/management',
      name: 'managementView',
      component: ManagementView,
    },
  ],
})

export default router
