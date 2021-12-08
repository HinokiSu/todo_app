const mongoose = require('../db')

// create todo structure
const TodosSchema = new mongoose.Schema(
  {
    content: { type: String, default: '' },
    completed: { type: Boolean, default: false },
  },
  {
    versionKey: false, // 是否添加字段 __v 版本号
  }
)

module.exports = mongoose.model('Todo', TodosSchema, 'todos')
