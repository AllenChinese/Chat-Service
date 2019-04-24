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

module.exports = router
