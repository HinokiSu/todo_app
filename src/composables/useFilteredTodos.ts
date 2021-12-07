import { ref, computed } from 'vue'
/* 每一个composables 都维护自身的独立状态数据 */

// 过滤todos
export default function useFilteredTodos(todos:any) {
  // 当前选中的过滤标签
  const currFilterTab = ref('all')
  // 根据filter的value过滤todos
  const filteredTodos = computed(() => {
    switch (currFilterTab.value) {
      case 'done':
        return todos.value.filter((todo:any) => todo.completed)
      case 'todo':
        return todos.value.filter((todo:any) => !todo.completed)
      default:
        return todos.value
    }
  })

  return {
    filteredTodos,
    currFilterTab,
  }
}
