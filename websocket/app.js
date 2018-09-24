const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080
const router = express.Router()
var server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

router.get('/', (req, res) => {
	res.send("home websocket")
})

app.use('/api', router)
server.listen(port)

const clients = []

io.on('connection', function (socket) {
  clients.push(socket)
  //socket.emit('news', { hello: 'world' })
  socket.emit('connectChatSuccesful', { ok: 'ok' })
  socket.on('ping', function (data) {
    console.log("ping received")
  })

  socket.on('addNewMessage', function (data) {
    clients.map((client, index) => {
      //console.log(client)
      if(client.id !== socket.id)
        client.emit('newReceiveMessage', data)
    })
    socket.emit('confirmAddNewMessageReceived', { ok: 'ok' })
    console.log(data)
  })
});


