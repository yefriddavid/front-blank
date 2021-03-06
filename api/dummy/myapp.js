
const dotenv = require('dotenv').config()
const proxy = require('http-proxy-middleware')
//const vhost = require("vhost")

const crypto = require('crypto')
const exec = require('child_process').exec

const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonDb = require('node-json-db')
const db = new jsonDb('apiwebdb', true, false)

const app = express();
const http = require("http").Server(app)
//const io = require("socket.io")(http)
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors());

db.push("/users[]", {
  id: 1,
  name: 'test',
  lastName: 'tets last',
  password: '159753',
  email: 'user@test.com',
  status: 1,
  cellphone: '555-555'
})

const router = express.Router()

router.get('/users', (req, rest) => {
  rest.json({
    users: db.getData("/users")
  })
})

router.get('/users/view/:id_user', (req, rest) => {
  rest.json({
    user: db.getData(`/users[${id_user}]`)
  })
})

router.post('/users/new', (req, rest) => {
  console.log(req);

  db.push("/users[]", {
    id: db.getData("/users").lenght,
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    status: req.body.status,
    cellphone: req.body.status
  })
  rest.json({
    user: db.getData("/users").lenght
  })
})

router.put('users/update/:id_user', (req, rest) => {
  const id_user = req.body.id_user

  db.push(`/users[${id_user}]`, {
    id: id_user,
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    status: req.body.status,
    cellphone: req.body.status
  })
  rest.json({
    user: db.getData(`/users[${id_user}]`).id
  })
})

router.delete('users/delete/:id_user', (req, rest) => {
  const id_user = req.body.id_user

  db.delete(`/users[${id_user}]`)
  rest.json({
    user: db.getData(`/users[${id_user}]`).id
  })
})

app.use('/api', router);

app.listen(port);
console.log('Server Runing on port ' + port);
