import { createApp } from 'vue'
import App from './App.vue'

// axios
import request from '@/utils/request'


const app = createApp(App)

app.use(request)
app.mount('#app')
