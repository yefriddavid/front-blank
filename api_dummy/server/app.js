const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')
const jsonDb = require('node-json-db')
const apiDb = new jsonDb('../data/apidb', true, false)
const uuidDb = require('uuid/v1');
//const proxy = require('http-proxy-middleware')
const vhost = require("vhost")
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router()
const appFrontDev = vhost("127.0.0.1",express.static("../../build"));

app.use(bodyParser.urlencoded({
  extended: true
}))

/*
  firstName: 'test',
  lastName: 'tets last',
  password: '159753',
  email: 'user@test.com',
  status: 1,
  cellphone: '555-555'
*/

router.get('/users', (req, res) => {
  const data = apiDb.getData(`/users`)
  const keys = Object.keys(data)
  const users = keys.map(key => { return {id: key, ...data[key]} })
  res.json(users)
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id
  res.json(apiDb.getData(`/users/${id}`))
})

router.post('/users', (req, res) => {
  const id = uuidDb()
  const newData = req.body
  apiDb.push(`/users/${id}`, newData)
  res.json(apiDb.getData("/users"))
})

router.put('/users/:id', (req, rest) => {
  const id = req.params.id
  const newData = req.body
  apiDb.delete(`/users/${id}`)
  apiDb.push(`/users/${id}`, newData)
  rest.json(apiDb.getData(`/users/${id}`))
})

router.delete('/users/:id', (req, res) => {
  const id = req.params.id
  apiDb.delete(`/users/${id}`)
  res.status(200).send();
})

app.use('/api', router)
app.use(appFrontDev)

app.listen(port);
