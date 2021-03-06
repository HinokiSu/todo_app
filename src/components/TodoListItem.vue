<template>
  <!-- 当 已完成，添加一个类名 done -->
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label>
      <!-- $emit触发自定义事件 -->
      <input
        type="checkbox"
        :checked="todoItem.completed"
        @click="changeState(todoItem)"
      />
      <!-- @change-state="todoItem.completed = $event.target.checked" -->
      {{ todoItem.content }}
      <span class="check-button"></span>
    </label>
    <div class="todo-remove-wrapper">
      <div class="remove-wrapper">
        <button class="remove-btn" @click="clearTodoItem(todoItem.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTodos from '@/composables/useTodos'
export default defineComponent({
  name: 'TodoListItem',
  props: ['todoItem'],
  emits: ['changeState'],
  setup(props, { emit }) {
    const { removeTodoItem, modifyTodo, } = useTodos()

    const changeState = (todoItem: any) => {
      todoItem.completed = !todoItem.completed
      modifyTodo(todoItem)
    }

    const clearTodoItem = (id: string) => {
      if (!id) {
        console.log('id is null')
        return
      }
      removeTodoItem(id)
    }

    return {
      clearTodoItem,
      changeState,
    }
  },
})
</script>

<style scoped>
/* 每一个todoItem */
.todo-item {
  padding: 16px;
  box-shadow: 8px 4px 10px rgb(203, 204, 206);
  border-radius: 10px;
  background-color: rgba(232, 207, 252, 0.404);
  display: flex;
  justify-content: space-between;
}

/* 默认单选框 */

.todo-item input {
  margin-right: 16px;
  /* 将默认checkbox框隐藏 */
  opacity: 0;
}

.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}

.todo-item.done {
  /* 文本修饰线 */
  text-decoration: line-through;
  /* 设置斜体 */
  font-style: italic;
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

/* 选中/未选中 共同样式- 都是一个圆 */
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  /* 插入空内容, 用在伪元素 */
  content: '';
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

/* 未选中 */
.todo-item label span.check-button::before {
  border: 2px solid rgb(155, 121, 179);
}

/* 选中 */
.todo-item label span.check-button::after {
  transition: 0.6s;
  background: linear-gradient(rgb(159, 87, 218), rgba(122, 59, 223, 0.897));

  /* 移动并缩小 */
  transform: translate(2px, 2px) scale(0.9);
  opacity: 0;
}

.todo-item input:checked + span.check-button::after {
  opacity: 1;
}

.remove-btn {
  border: unset;
  font-size: 14px;
  font-weight: 400;
  color: rgba(81, 48, 228, 0.842);
  padding: 3px 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(243, 240, 252, 0.781);
  background-color: rgba(186, 131, 238, 0.267);
  cursor: pointer;
}
</style>
