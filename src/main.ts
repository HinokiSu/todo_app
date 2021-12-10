import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes'
// axios
import request from '@/utils/request'


const app = createApp(App)
app.use(router)
app.use(request)

app.mount('#app')
