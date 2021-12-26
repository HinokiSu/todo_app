import { onMounted, ref, watch } from 'vue'
import { submitTodo, getTodos, deleteTodo, updateTodo } from '@/api/index'

interface todo {
  _id: string
  content: string
  completed: boolean
}

export default function useTodos() {
  const todos = ref<todo[]>([])

  // 获取todos
  // 待办： 根据uid查找所有todo
  const getTodoList = async () => {
    const res = await getTodos()
    todos.value = res.map((todo: todo) => ({
      id: todo._id,
      content: todo.content,
      completed: todo.completed,
    }))
  }

  // 删除todo
  const removeTodoItem = async (id: string) => {
    const res = await deleteTodo(id)
    if (!res) {
      console.log('删除todo失败')
      return
    }
  }

  // 添加todo
  const addTodo = async (todo: any) => {
    const res = await submitTodo(todo)
    if (!res) console.log('添加todo失败')
  }

  // 修改 todo
  const modifyTodo = async (todo: any) => {
    const res = await updateTodo(todo)
    console.log(res)
  }

  watch(
    () => todos.value,
    () => {
      getTodoList()
    }
  )

  onMounted(() => {
    getTodoList()
  })

  return {
    todos,
    addTodo,
    removeTodoItem,
    modifyTodo,
  }
}
