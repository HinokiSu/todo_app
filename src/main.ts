import { createApp } from 'vue'
import App from './App.vue'

// axios
import request from '@/utils/request'


createApp(App).use(request).mount('#app')
