/** RoomMessage.js */
const mongoose = require('mongoose')
const RoomMessageSchema = require('../schemas/roomMessageSchema')

/** 创建 model, roomMessage 对应 mongodb 数据库中 users 的 collections */
const RoomMessage = mongoose.model('roommessages', RoomMessageSchema)
module.exports = RoomMessage
