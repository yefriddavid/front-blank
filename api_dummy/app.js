const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonDb = require('node-json-db')
const dbUsers = new jsonDb('data/apiwebdb', true, false)
//const proxy = require('http-proxy-middleware')
const vhost = require("vhost")

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors());

/*dbUsers.push("/users[]", {
  id: 1,
  name: 'test',
  lastName: 'tets last',
  password: '159753',
  email: 'user@test.com',
  status: 1,
  cellphone: '555-555'
})*/

const router = express.Router()

router.get('/users', (req, rest) => {
  rest.json({
    users: dbUsers.getData("/users")
  })
})

router.get('/users/view/:id_user', (req, rest) => {
  rest.json({
    user: dbUsers.getData(`/users[${id_user}]`)
  })
})

router.post('/users/new', (req, rest) => {
  //console.log(req);

  dbUsers.push("/users[]", {
    id: dbUsers.getData("/users").lenght,
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    status: req.body.status,
    cellphone: req.body.status
  })
  rest.json({
    user: dbUsers.getData("/users").lenght
  })
})

router.put('users/update/:id_user', (req, rest) => {
  const id_user = req.body.id_user

  dbUsers.push(`/users[${id_user}]`, {
    id: id_user,
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    status: req.body.status,
    cellphone: req.body.status
  })
  rest.json({
    user: dbUsers.getData(`/users[${id_user}]`).id
  })
})

router.delete('users/delete/:id_user', (req, rest) => {
  const id_user = req.body.id_user

  dbUsers.delete(`/users[${id_user}]`)
  rest.json({
    user: dbUsers.getData(`/users[${id_user}]`).id
  })
})



const appFrontDev = vhost("127.0.0.1",express.static("../build"));

app.use('/api', router)
app.use(appFrontDev)


app.listen(port);
//console.log('Server Runing on port ' + port);
