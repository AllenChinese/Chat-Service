/** roomMessageSchema */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/** 创建 Schema */
const RoomMessageSchema = new Schema({
  id: Number,
  name: String,
  msg: String,
  time: String,
  sign: Number
})

module.exports = RoomMessageSchema
