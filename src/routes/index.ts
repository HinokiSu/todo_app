import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/views/TodoApp.vue'),
    meta: {
      requiresAuth: true,
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const isLoginIn = () => {
  const auth = sessionStorage.getItem('auth')
  return auth
}

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    if (!isLoginIn()) {
      return {
        name: 'login',
      }
    } else {
      return
    }
  }
  return
})

export default router
