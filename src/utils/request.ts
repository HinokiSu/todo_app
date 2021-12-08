import axios from "axios";

export const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

export default {
  http,
  install(app:any) {
    app.config.globalProperties.$http = http
  }
}