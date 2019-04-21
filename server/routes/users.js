const express = require('express')
const router = express.Router()
/** 引入模型 */
const User = require('../db/models/userModel')
router.get('/user/getUserList', function(req, res) {
  User.find({}, (err, data) => {
    if (err) {
      next(err)
    }
    res.json({
      data: {
        chatList: data
      },
      success: true
    })
  })
})

module.exports = router
