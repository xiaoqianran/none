// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue'
import Features from '@/views/Features.vue'
import Resources from '@/views/Resources.vue'
import Company from '@/views/Company.vue'
import Login from '@/views/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/product', name: 'Product', component: Product },
  { path: '/features', name: 'Features', component: Features },
  { path: '/resources', name: 'Resources', component: Resources },
  { path: '/company', name: 'Company', component: Company },
  { path: '/login', name: 'Login', component: Login },
  // 404
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router