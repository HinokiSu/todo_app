<template>
  <div class="todo-list">
    <TodoListItem
      v-for="todo in todos"
      :key="todo._id"
      :todoItem="todo"
      @change-state="todo.completed = $event.target.checked"
      :removeTodo="emitRemove"
      :modifyTodo="emitModify"
    />
  </div>
</template>

<script lang="ts" name="TodoList">
import { defineComponent } from 'vue'
import TodoListItem from './TodoListItem.vue'

export default defineComponent({
  components: { TodoListItem },
  props: ['todos'],
  emits: ['remove-todo', 'modify-todo'],
  setup(props, { emit }) {
    const emitRemove = (id: any) => {
      emit('remove-todo', id)
    }

    const emitModify = (e:any, todo:any) => {
      todo.completed = e.target.checked
      emit('modify-todo', todo)
    }
    return {
      emitRemove,
      emitModify
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
