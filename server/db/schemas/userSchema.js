/** userSchema 用户 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** 创建 Schema */
const UserSchema = new Schema({
  id: Number,
  name: String,
  desc: String,
  time: String,
  preview: String
})

module.exports = UserSchema
