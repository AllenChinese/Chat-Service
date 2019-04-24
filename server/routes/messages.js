const express = require('express')
const router = express.Router()
const RoomMessage = require('../db/models/roomMessageModel')

router.get('/messages/getRoomMessage', function(req, res) {
  RoomMessage.find({}, (err, data) => {
    if (err) {
      next(err)
    }
    res.json({
      data: {
        chatLists: data
      },
      success: true
    })
  })
})

router.post('/messages/insertRoomMessage', function(req, res) {
  console.log(req.body)
  RoomMessage.insertMany(req.body, (err, data) => {
    if (err) {
      next(err)
    }
    res.json({
      success: true,
      msg: '发送成功'
    })
  })
})

module.exports = router
