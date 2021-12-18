const UsersModel = require('../model/users')

module.exports = function (app) {
  // add user
  app.post('/user', (req, res) => {
    let body = req.body
    const UserInstance = new UsersModel(body)
    UserInstance.save((err) => {
      if (err) {
        console.log('Mongoose: Unable to save user to the DB!')
        throw err
      } else {
        res.send(body)
      }
    })
  })

  // find user
  app.get('/user', (req, res) => {
    const userInfo = JSON.parse(req.query.userInfo)
    UsersModel.findOne(
      { username: userInfo.username,
        password: userInfo.password
      },

      (err, data) => {
        if (err) {
          console.log('Mongoose: Unable to modify the user from DB')
          throw err
        } else {
          res.send(data)
        }
      }
    )
  })
}
