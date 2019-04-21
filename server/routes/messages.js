const express = require('express')
const router = express.Router()
const RoomMessage = require('../db/models/roomMessageModel')

router.get('/messages/getRoomMessage', function(req, res) {
  RoomMessage.find({}, (err, data) => {
    if (err) {
      next(err)
    }
    res.json(data)
  })
  // const singleWindowItem = {
  //   success: true,
  //   data: {
  //     title: '杭州滨江 Allenzhoujiawei',
  //     chatLists: [
  //       {
  //         id: 1,
  //         name: 'allen周嘉炜',
  //         time: '2019.03.12 14:20:34',
  //         sign: 1,
  //         msg:
  //           'Google 的免费翻译服务可提供简体中文和另外100多种语言之间的互译功能'
  //       },
  //       {
  //         id: 2,
  //         name: '金泰妍',
  //         sign: 0,
  //         time: '2019.03.16 14:20:34',
  //         msg:
  //           'Specificity is a weight that is applied to a given CSS declaration'
  //       }
  //     ]
  //   }
  // }
  // res.json(singleWindowItem)
})

module.exports = router
