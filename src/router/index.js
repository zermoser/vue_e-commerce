import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/user/homeView.vue'
import Search from '@/views/user/searchView.vue'
import Profile from '@/views/user/profileView.vue'
import Success from '@/views/user/successView.vue'
import Checkout from '@/views/user/checkoutView.vue'
import Cart from '@/views/user/cartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
  ]
})

export default router
