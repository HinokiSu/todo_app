const mongoose = require('../db')

// create user structure
const UsersSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      default: 'user_test'
    },
    password: {
      type: String, 
      default: '123456'
    }

  },
  {
    versionKey: false,
  }
)

module.exports = mongoose.model('User', UsersSchema, 'users')