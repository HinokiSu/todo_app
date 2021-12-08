const data = [
  { id: 1, content: 'eat', completed: false },
  { id: 2, content: 'walk', completed: false },
]

module.exports = function (app) {
  // 请求列表
  app.get('/todo', (req, res) => {
    res.send({ todos: data })
  })

  // 新增todo item
  app.post('/todo', (req, res) => {
    let body = req.body
    res.send(body)
  })

  // 删除todo
  app.delete('/todo', (req, res) => {})
}
