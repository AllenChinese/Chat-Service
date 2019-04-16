var express = require('express');
var router = express.Router();

router.get('/user/getUserList', function(req, res) {
  const userList = {
    data: {
      chatList: [
        {
          id: 1,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'allen 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 2,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'len 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 3,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: '30 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 4,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'allen 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 5,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'person 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 6,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'allen 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 7,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'hello 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 8,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'allen 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 9,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'allen 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 10,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'time 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 11,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'allen 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        },
        {
          id: 12,
          preview: 'https://avatars2.githubusercontent.com/u/414752?s=88&v=4',
          name: 'allen 来自杭州',
          time: '35 分钟前',
          desc: '再不回来我要找你们领导了，你打球像蔡徐坤！'
        }
      ]
    },
    success: true
  };
  res.json(userList);
});

module.exports = router;
