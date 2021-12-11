<template>
  <main>
    <div class="container">
      <!-- 标题 -->
      <div class="top-title">
        <h3>Welcome, Todo App!</h3>
      </div>
      <!-- 输入框 -->
      <!-- ref所定义的属性，在模板中自动解析出value -->
      <todo-add @add-todo="addTodo" />
      <!-- 过滤标签 -->
      <todo-filter
        :selected="currFilterTab"
        @change-filterTab="currFilterTab = $event"
      />
      <!-- 事务列表 -->
      <todo-list :todos="filteredTodos" @remove-todo="removeTodoItem" @modify-todo="modifyTodo"/>
    </div>
  </main>
</template>

<script lang="ts" >
import { defineComponent } from 'vue'
import TodoAdd from '@/components/TodoAdd.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
// 导入抽离的方法
import useTodos from '@/composables/useTodos'
import useFilteredTodos from '@/composables/useFilteredTodos'

export default defineComponent({
  name: "TodoApp",
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    // 解构 抽离的方法的返回值
    const { todos, addTodo, removeTodoItem, modifyTodo } = useTodos()
    // 过滤todos
    const { filteredTodos, currFilterTab } = useFilteredTodos(todos)

    return {
      addTodo,
      currFilterTab,
      filteredTodos,
      removeTodoItem,
      modifyTodo
    }
  },
})
</script>

<style scoped>

* {
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* 整个页面 */
main {
  /* 撑满整个屏幕 */
  width: 100vw;
  min-height: 100vh;
  /* 使用grid布局 */
  display: grid;
  /* 纵横轴对齐 */
  align-items: center;
  justify-items: center;
  background-color: #d8dff5;
}

/* 主容器 */
.container {
  width: 60%;
  max-width: 400px;
  /* 设置box阴影 */
  box-shadow: 6px 0px 16px rgb(90, 88, 88);
  /* 边框倒角 */
  border-radius: 24px;

  padding: 50px 30px;
  background-color: #fff;
}

/* 标题 */
.top-title {
  margin: 24px 0;
  font-size: 28px;
  color: rgb(210, 174, 243);
}
</style>