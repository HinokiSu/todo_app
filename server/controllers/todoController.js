// use mongoose
const TodosModel = require('../model/todos')

module.exports = function (app) {
  // 请求列表
  app.get('/todo', (req, res) => {
    TodosModel.find({}, (err, data) => {
      if (err) {
        console.log('Mongoose: Unable to find to the DB!')
      } else {
        res.send({
          data: data,
          meta: {
            msg: '获取成功',
            status: 200,
          },
        })
      }
    })
  })

  // 新增todo item
  app.post('/todo', (req, res) => {
    let body = req.body
    const todosInstance = new TodosModel(body)
    todosInstance.save((err, data) => {
      if (err) {
        console.log('Mongoose: Unable to save todo to the DB!')
        throw err
      } else {
        console.log(data)
        res.send({
          data: data,
          meta: {
            msg: '添加成功',
            status: 200,
          },
        })
      }
    })
  })

  // 删除todo
  app.delete('/todo', (req, res) => {
    TodosModel.findOneAndRemove({ '_id': req.query.id }, (err, data) => {
      if (err) {
        console.log('Mongoose: Unable to remove the data from DB!')
      } else {
        res.send({
          data: data,
          meta: {
            msg: '删除成功',
            status: 200,
          },
        })
      }
    })
  })

  // 修改todo completed
  app.put('/todo', (req, res) => {
    const newTodo = req.body.data.todo
    TodosModel.findByIdAndUpdate(
      newTodo.id,
      { $set: { completed: newTodo.completed } },
      { new: true },
      (err, data) => {
        if (err) {
          console.log('Mongoose: Unable to modify the data from DB!')
        } else {
          console.log(data)
          res.send({
            data: data,
            meta: {
              msg: '更新成功',
              status: 200,
            },
          })
        }
      }
    )
  })
}
