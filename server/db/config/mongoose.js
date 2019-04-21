/** 用于连接数据库并且定义 Schema 和 Model */
const mongoose = require('mongoose')
const config = require('./config')

module.exports = () => {
  // 连接 mongodb 数据库
  mongoose.connect(config.mongodb)
  // 实例化连接对象
  var db = mongoose.connection
  db.on('error', console.error.bind(console, '连接错误：'))
  db.once('open', callback => {
    console.log('Mongodb 连接成功！')
  })
  return db
}
