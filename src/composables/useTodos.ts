import { ref, onMounted } from 'vue'

/* 添加todo */
export default function useTodos() {
  // ref 需要 .value取到该值
  const todos = ref<any>([])
  // 添加 todo触发
  const addTodo = (todo:any) => todos.value.push(todo)

  // 通过异步接收 todo
  const fetchTodos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    )
    const rawTodos = await response.json()
    // map依次按照fun依次处理元素，并返回一个新数组， 该数组中的元素为处理后的值
    todos.value = rawTodos.map((todo:any) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed,
    }))
  }

  // 使用生命周期函数 onMounted
  onMounted(() => {
    fetchTodos()
  })

  return {
    todos,
    addTodo,
  }
}
