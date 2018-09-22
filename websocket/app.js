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

io.on('connection', function (socket) {
  console.log("Everybody it is connected")
  socket.emit('news', { hello: 'world' });
  socket.on('ping', function (data) {
    console.log("anybody make ping")
    console.log(data)
  });
});


