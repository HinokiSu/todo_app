<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoApp from '@/views/TodoApp.vue'
export default defineComponent({
  name: 'App',
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
