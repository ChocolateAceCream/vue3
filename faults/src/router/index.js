import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', 
    name: 'hello',
    // component: () => import(/* webpackChunkName: "helloWorld" */ '@/components/HelloWorld.vue')
    component: () => import(/* webpackChunkName: "helloWorld" */ '@/components/HelloWorld.vue')
  },
  {
    path: '/login/:id',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: () => import('@/views/404.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes,
})

export default router