const mongoose = require('mongoose')


const DBUrl = 'mongodb://127.0.0.1:27017/tododb'
// connect the database
mongoose.connect(DBUrl, (err) => {
  if (err) {
    console.log('Mongoose: Unable to connect to the DB!')
  } else {
    console.log('Mongoose: Connect to DB Successfully...')
  }
})

module.exports = mongoose
