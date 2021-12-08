// use mongoose
const TodosModel = require('../model/todos')

module.exports = function (app) {
  // 请求列表
  app.get('/todo', (req, res) => {
    TodosModel.find({}, (err, data) => {
      if (err) {
        console.log('Mongoose: Unable to find to the DB!')
      } else {
        res.send(data)
      }
    })
  })

  // 新增todo item
  app.post('/todo', (req, res) => {
    let body = req.body
    res.send(body)
  })

  // 删除todo
  app.delete('/todo', (req, res) => {})
}
