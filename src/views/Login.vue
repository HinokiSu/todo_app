<template>
<div>
  <LoginInput v-model="username" />
</div>

</template>

<script lang="ts">
import LoginInput from '@/components/LoginInput.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  components: {
    LoginInput
  },
  setup () {
    const username = ref<string>('')
    return {
      username
    }
  }
})
</script>

<style scoped>

</style>