<template>
  <main>
    <div class="box-container">
      <div class="left-container">
        <img src="../../static/purple_sky.jpg" alt="" />
      </div>

      <div class="login-wrapper">
        <div class="login-container">
          <div class="login-title">
            <p>Sign in</p>
          </div>
          <div class="login-form">
            <div class="input-username">
              <cus-input
                placeholder="please input username"
                v-model="userInfo.username"
                size="large"
                prefix="Username"
              />
            </div>

            <div class="input-password">
              <cus-input
                placeholder="please input password"
                v-model="userInfo.password"
                size="large"
                prefix="Password"
              />
            </div>
          </div>
          <div class="login-features">
            <cus-button class="sign-in-btn" size="large" @click="signIn"
              >Sign in</cus-button
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from 'vue'
import CusInput from '@/components/input/Input.vue'
import CusButton from '@/components/Button.vue'

import useUser from '@/composables/useUser'
import router from '@/routes'
export default defineComponent({
  name: 'Login',
  components: {
    CusInput,
    CusButton,
  },
  setup() {
    const userInfo = reactive({
      username: '',
      password: '',
    })
    watchEffect(() => {
      // console.log(userInfo.username)
      // console.log(userInfo.password)
    })
    const { verifyUser } = useUser()
    const signIn = async () => {
      const auth =  await verifyUser({
        username: userInfo.username,
        password: userInfo.password
      })

      if(!auth) {
        console.log('验证未通过!')
        return
      }
      // add auth
      sessionStorage.setItem('auth', auth._id)
      // reset userInfo
      userInfo.username = ''
      userInfo.password = ''

      router.push({name: 'home'})

    }
    return {
      userInfo,
      signIn,
    }
  },
})
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    to right bottom,
    rgba(112, 132, 219, 0.521),
    rgba(147, 80, 185, 0.425),
    rgba(182, 19, 60, 0.233)
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

/* box 容器， 主体内容 */
.box-container {
  position: absolute;
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  border-radius: 36px;
  box-shadow: 0 0 36px rgba(112, 111, 112, 0.39);
  overflow: hidden;
}

/* 左侧图片展示区域 */
.left-container {
  border-radius: 0 36px 36px 0;
  overflow: hidden;
  z-index: 50;
}

.left-container img {
  height: 100%;
  object-fit: cover;
}

/* 登录功能区 主体 */
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin-left: -36px;
  z-index: 49;
}

.login-container {
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
}

.login-title {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.88);
}

.login-form {
  padding: 20px;
  border-radius: 20px;
  justify-self: center;
}

.input-username {
  padding-bottom: 20px;
}

.input-password {
  padding-bottom: 20px;
}

/* .form-input {
  padding: 20px 40px;
} */

.login-features {
  justify-self: center;
}
.sign-in-btn {
  padding: 16px 100px;
  background: linear-gradient(
    90deg,
    rgba(119, 21, 211, 0.6),
    rgba(20, 23, 219, 0.7)
  );
}

.sign-in-btn:hover {
  background: linear-gradient(
    90deg,
    rgba(119, 21, 211, 0.5),
    rgba(20, 23, 219, 0.6)
  );
}
</style>
