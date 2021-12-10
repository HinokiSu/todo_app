import { createRouter, createWebHashHistory } from 'vue-router'
import TodoApp from '@/views/TodoApp.vue'
const routes = [
  {
    path: '/',
    name: 'todo',
    component: TodoApp,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
