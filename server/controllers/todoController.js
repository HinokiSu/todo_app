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
    const todosInstance = new TodosModel(body)
    todosInstance.save((err) => {
      if (err) {
        console.log('Mongoose: Unable to save todo to the DB!')
        throw err
      } else {
        res.send(body)
      }
    })
  })

  // 删除todo
  app.delete('/todo', (req, res) => {
    TodosModel.findOneAndRemove(req.body, (err, data) => {
      if (err) {
        console.log('Mongoose: Unable to remove the data from DB!')
      } else {
        res.send(data)
      }
    })
  })

  // 修改todo completed
  app.put('/todo', (req, res) => {
    let modifVal = req.body.data
    console.log(modifVal)
    TodosModel.findByIdAndUpdate(
      modifVal.id,
      { completed: modifVal.completed },
      (err, data) => {
        if (err) {
          console.log('Mongoose: Unable to modify the data from DB!')
        } else {
          res.send(data)
        }
      }
    )
  })
}
