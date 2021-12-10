<template>
  <todo-app></todo-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoApp from '@/views/TodoApp.vue'
export default defineComponent({
  components: {
    TodoApp,
  },
  setup() {
    return {}
  },
})
</script>

<style>
@import url('@/assets/css/global.css');
</style>
