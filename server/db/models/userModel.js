/** UserModel.js */
const mongoose = require('mongoose')
const UserSchema = require('../schemas/userSchema')

/** 创建 model, user 对应 mongodb 数据库中 users 的 collections */
const User = mongoose.model('users', UserSchema)
module.exports = User
