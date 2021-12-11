<template>
  <div class="input-area">
    <input type="text" v-model="todoContent" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo">
      <!-- 表示图标 -->
      <i class="plus"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'TodoAdd',
  props: ['add-todo'],
  // props是 父组件传递过来的
  setup(props, { emit }) {
    return useEmitAddTodo(emit)
  },
})

// 抽离专属的composables
function useEmitAddTodo(emit: any) {
  const todoContent = ref('')
  // 输入框enter事件
  const emitAddTodo = () => {
    // 定义todo对象
    const todo = {
      content: todoContent.value,
      // 是否完成
      completed: false,
    }
    // 触发 父组件传递来的方法
    emit('add-todo', todo)
    todoContent.value = ''
  }
  return {
    todoContent,
    emitAddTodo,
  }
}
</script>

<style scoped>
/* 添加框 */
.input-area {
  position: relative;
  display: flex;
  align-items: center;
}

.input-area input {
  /* 去除边框 及 轮廓 */
  border: none;
  outline: none;
  padding: 12px 50px 12px 18px;
  border-radius: 50px;
  box-shadow: 6px 6px 20px rgb(189, 186, 192);
  width: 100%;
  font-size: 16px;
  color: black;
}

/* 添加todo的button */
.input-area button {
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  /* 设置成圆 */
  border-radius: 50%;
  /* 设置 渐变色 */
  background: linear-gradient(rgb(110, 192, 230), rgb(198, 145, 241));

  color: white;
  position: absolute;
  right: 1px;
  cursor: pointer;
}

/* 绘制按钮的 十字样式 */
.input-area .plus {
  /* 设置成 块级元素， 使得 宽高生效，占满整个按钮 */
  display: block;
  width: 100%;
  height: 100%;
  /* 设置两个 渐变背景色 */
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  /* 使得两个背景 中间交叉  */
  background-position: center;
  /* 剩余空间 不重复显示背景 */
  background-repeat: no-repeat;
}
</style>
