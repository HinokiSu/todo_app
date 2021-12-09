<template>
  <div class="todo-list">
    <TodoListItem
      v-for="todo in todos"
      :key="todo._id"
      :todoItem="todo"
      @change-state="todo.completed = $event.target.checked"
      :removeTodo="emitRemove"
    />
  </div>
</template>

<script lang="ts" name="TodoList">
import { defineComponent } from 'vue'
import TodoListItem from './TodoListItem.vue'

export default defineComponent({
  components: { TodoListItem },
  props: ['todos'],
  emits: ['remove-todo'],
  setup(props, { emit }) {
    const emitRemove = (id: any) => {
      emit('remove-todo', id)
    }
    return {
      emitRemove,
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
