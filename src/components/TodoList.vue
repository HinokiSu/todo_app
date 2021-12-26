<template>
  <div class="todo-list">
    <TodoListItem v-for="todo in todos" :key="todo._id" :todoItem="todo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoListItem from './TodoListItem.vue'

export default defineComponent({
  name: 'TodoList',
  components: { TodoListItem },
  props: ['todos'],
  setup(props, { emit }) {
    const emitModify = (e: any, todo: any) => {
      todo.completed = e.target.checked
      emit('modify-todo', todo)
    }
    return {
      emitModify,
    }
  },
})
</script>

<style scoped>
/* todo列表 */
.todo-list {
  display: grid;
  /* 行之间的间隙大小, grid布局 */
  row-gap: 14px;
}
</style>
