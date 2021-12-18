const express = require('express')

// 导入 todoController
const todoController = require('./controllers/todoController')
// import userController
const userController = require('./controllers/userController')
const app = express()

// 获取post参数middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = 4000
// 使用todoController路由
todoController(app)
userController(app)
app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`You are listening : localhost:${port}`)
})
