const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
var userSocket = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  console.log('a user connected')
  // 监听 join 事件
  socket.on('join', name => {
    userSocket[name] = socket
    // 服务器向全体群聊成员广播新用户
    io.emit('join', name)
  })

  // 监听 message 发送聊天信息事件
  socket.on('message', msg => {
    io.emit('message', msg)
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})