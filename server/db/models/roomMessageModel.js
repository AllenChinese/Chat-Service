/** UserModel.js */
const mongoose = require('mongoose')
const RoomMessageSchema = require('../schemas/roomMessageSchema')

/** 创建 model, user 对应 mongodb 数据库中 users 的 collections */
const User = mongoose.model('roomMessage', RoomMessageSchema)
module.exports = User
