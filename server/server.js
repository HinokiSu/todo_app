const express = require('express')
// const cors = require('cors')  // 添加 'cors' dependence
// 导入 todoController
const todoController = require('./controllers/todoController')

const app = express()
// app.use(cors()) // 添加 'cors' middleware

// 获取post参数middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const port  = 4000
app.get('/', (req, res) => {
  res.send('Hello!')
})

// 使用todoController路由
todoController(app)

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  }
  console.log(`You are listening : localhost:${port}`);
})

