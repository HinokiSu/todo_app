import { ref, onMounted } from 'vue'
import { submitTodo, getTodos } from '@/api/index'
import axios from 'axios'
/* 添加todo */
export default function useTodos() {
  // ref 需要 .value取到该值
  const todos = ref<any>([])
  // 添加 todo触发
  const addTodo = async (todo: any) => {
    const res = await submitTodo(todo)
    if(!res) console.log('添加todo失败')
  }

  // 获取todos list
  const getTodoList = async () => {
    const res = await getTodos()

    if (!res) {
      console.log('获取todos失败!')
      return
    }
    todos.value = res
  }

  // 使用生命周期函数 onMounted
  onMounted(() => {
    getTodoList()
  })

  return {
    todos,
    addTodo,
  }
}
