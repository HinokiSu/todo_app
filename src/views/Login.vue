<template>
  <div>
     <LoginInput
      size="small"
      placeholder="place input username"
      v-model="username"
    />
    <LoginInput
      size="small"
      placeholder="place input password"
      v-model="password"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import LoginInput from '@/components/LoginInput.vue'

export default defineComponent({
  name: 'Login',
  components: {
    LoginInput,
  },
  setup() {
    let username = ref('')
    let password = ref('')
    watchEffect(() => {
      console.log(username.value)
      console.log(password.value)
    })
    return {
      username,
      password
    }
  },
})
</script>

<style scoped></style>
