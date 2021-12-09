import { onMounted, ref } from 'vue'
import { submitTodo, getTodos, deleteTodo, updateTodo } from '@/api/index'

interface todo {
  _id: string
  content: string
  completed: boolean
}


/* 添加todo */
export default function useTodos() {
  const todos = ref([])

  // 获取todos
  const getTodoList = async () => {
    const res = await getTodos()
    todos.value = res.map((todo: todo) => ({
      id: todo._id,
      content: todo.content,
      completed: todo.completed,
    }))
  }

  // 删除todo
  const removeTodoItem = async (id: any) => {
    await deleteTodo(id)
    todos.value = await getTodos()
  }

  // 添加todo
  const addTodo = async (todo: any) => {
    const res = await submitTodo(todo)
    if (!res) console.log('添加todo失败')
    // 重新获取
    getTodoList()
  }

  // 修改 todo
  const modifyTodo = async (todo:any) => {
    const res = await updateTodo(todo)
    console.log(res)
  }


  onMounted(() => {
    getTodoList()
  })

  return {
    todos,
    addTodo,
    removeTodoItem,
    modifyTodo
  }
}
