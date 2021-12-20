<template>
  <div class="home-wrapper">
    <header class="home-header">
      <hinoki-logo size="large" :tolink="{ name: 'home' }"></hinoki-logo>
      <div class="nav-container">
        <div class="nav-link">
          <router-link :to="{ name: 'home' }"> Home </router-link>
        </div>
        <div class="delimiter"></div>
        <div class="nav-link">
          <router-link :to="{ name: 'todo' }"> Todo </router-link>
        </div>

        <div class="delimiter"></div>
        <div class="nav-link">
          <router-link :to="{ name: 'todo' }"> About </router-link>
        </div>
      </div>
      <div class="language">
        <div class="lang-select">ZH</div>
      </div>
      <div class="account-container">
        <div class="sign-in">
          <router-link :to="{ name: 'login' }"> Sign in </router-link>
        </div>
        <div class="sign-up">
          <router-link :to="{ name: 'register' }"> Sign up </router-link>
        </div>
      </div>
    </header>
    <main class="home-main">
      <div class="main-text">
        <p>Hey! This here 👋</p>
        <p>I'm Hinoki 🌠</p>
        <p>This ia a personal development record Website.</p>
        <p>Enjoy!</p>
      </div>
      <div class="sparation-line"></div>
    </main>
    <footer>
      <p class="icp-info">
        <a href="https://beian.miit.gov.cn/">鲁ICP备2021045142号-1</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HinokiLogo from '@/components/HinokiLogo.vue'
export default defineComponent({
  name: 'Home',
  components: {
    HinokiLogo,
  },
  setup() {

    const language = reactive({
      en: 'EN',
      zh: 'ZH'
    })

   const changeLang = () => {}
    return {}
  },
})
</script>

<style scoped>
* {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

/* 外部包装 */
.home-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right bottom,
    rgba(125, 143, 224, 0.301),
    rgba(147, 80, 185, 0.425),
    rgba(182, 19, 60, 0.233)
  );

  display: grid;
  grid-template-rows: 80px 1fr auto;
}

/* logo */
.hinoki-logo {
  display: flex;
  justify-content: center;
}

/* 头部 */
.home-header {
  width: 100%;
  display: grid;
  grid-template-columns: 10% 65% 5% 20%;
  align-items: center;
}

/* 导航 */

.nav-container {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link a {
  padding: 2px 10px;
  color: #222;
  font-size: 24px;
  font-weight: normal;
}

.delimiter {
  text-align: center;
  height: 40px;
  width: 2px;
  background-color: #333;
}

.account-container {
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sign-in,
.sign-up {
  font-size: 24px;
  font-weight: 400;
  color: #eaeaea;
  padding: 10px 15px;
  background-color: rgba(14, 14, 15, 0.884);
  border-radius: 10px;
  transition: color 0.2s ease 0s;
}

.sign-in a,
.sign-up a {
  color: inherit;
}

.sign-in {
  margin-left: 20px;
}

.sign-up {
  margin-right: 20px;
}

.sign-in:hover,
.sign-up:hover {
  background-color: rgba(14, 14, 15, 0.884);
  color: #fff;
}

/* 内容 文本 */
.home-main {
  position: relative;
  display: flex;
  justify-content: center;
}
.main-text {
  position: absolute;
  bottom: 100px;
  left: 2%;
}

.main-text p {
  font-size: 40px;
  font-weight: normal;
}

.sparation-line {
  position: absolute;
  bottom: 0px;
  width: 90%;
  padding: 1px 0;
  border-radius: 2px;
  background-color: black;
}

/* 底部 */
footer {
  display: grid;
  justify-items: center;
  padding-top: 20px;
  padding-bottom: 5px;
}

.icp-info a {
  color: inherit;
  font-size: 14px;
  color: #222;
}
</style>
