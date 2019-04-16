var express = require('express');
var router = express.Router();

router.get('/messages/getUserList', function(req, res) {
  const userList = [
    {
      name: 'luffy',
      age: 35,
      gender: '男'
    },
    {
      name: 'lfy',
      age: 23,
      gender: '女'
    }
  ];
  res.json(userList);
});

module.exports = router;
