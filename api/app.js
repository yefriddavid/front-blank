const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonDb = require('node-json-db')
const apiDb = new jsonDb('data/apidb', true, false)
const uuidDb = require('uuid/v1');
//const proxy = require('http-proxy-middleware')
const vhost = require("vhost")
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router()
const appFrontDev = vhost("localhost",express.static("../../build"));

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

/*
  firstName: 'test',
  lastName: 'tets last',
  password: '159753',
  email: 'user@test.com',
  status: 1,
  cellphone: '555-555'
*/

router.post('/oauth/token', (req, res) => {
  res.json({"token_type":"Bearer","expires_in":"35999","access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQxYTI1NTEzZjcwMGI1YzU3YWZkOGEzMDI5NjQ1NWJiMzYyNjQ4MGJiOGQ2YjA2YTUyNTc2MTA4NTc0ZTc3MzI4OGNhYTZlNTQxYmUxMGM1In0.eyJhdWQiOiIyIiwianRpIjoiNDFhMjU1MTNmNzAwYjVjNTdhZmQ4YTMwMjk2NDU1YmIzNjI2NDgwYmI4ZDZiMDZhNTI1NzYxMDg1NzRlNzczMjg4Y2FhNmU1NDFiZTEwYzUiLCJpYXQiOjE1MjYzMjEzNTcsIm5iZiI6MTUyNjMyMTM1NywiZXhwIjoxNTI2MzU3MzU2LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.QNKpXQmyD-eLGMuzY8bjhLGfABkuyGjEpmJ-GN8VCh9sqfOhKUTtSomTHmg6I3zt0BTdkYacFFrHxUINL9AFXVJNqG7t-xMoxcCNKWCXlRG9oG3rKN8j3wwDOv7jAF4hdcpLSS8ukR82kK-bdGUc_REHyZXtYzZVzNeIHFfTxlMY6Kz0Z199O-4TudnznDCDVUai2EKebwi_oge9WRgMcae3jUM7wRvk2vXVq-QQjxTEzBOqbcLKKHWvXIEw2y46FGOn6ZISz5CeApHoFras8AiuC5z-_jDn7oW3HlSy0jSaGXBFmzOPA4aelCCxQbyzvZixiVcFQSnpmJP1WnN4mBnwPDh3jiyiIeBC1zbdxI8inwlgs4wrorYUNbcCjXOLTcXfBuQGAMmLkk5f4UNZzFeudYpcwk9GCBJzbRczD0siPwauQdNqz2fuVZQVVAHSS23dgU3ALeOpReqcUKDDxLU7wV8E2gIbhb66eYLnnC0NsKCCQmwmpFPbBaU4hlz2WqTGtZLBSBhwZ77kuaUnFjZAWfHhW_0SVCaIkH-HtH3vEOJDfTDxCSqP1j2F1rlvnj-Zh3-vHkMlkIAZ1eRshIK4yFr9SmXMHS7IpJcuKez64wUKbHWRH4PO04ngTbRGuwQygbM9_whMiE5yMStw7PU8sRBjnMVl7yL8Q2Xt4aY","refresh_token":"def502008c2118f3d20ae1fdb4b3a5b8462435fc41648cde33c7785c30c924107b30896abe67cb214112359005634d77420c1e2ec1b29f2eb559269e92677e120f66edf53eada8bbdfb31078ee640a404d700d3e0485fe28e458ac96f1574793ac71224cad4f2d3d49ebd7a42bbed8f36a5576c54eea0c17bbec8a782b274795503755090dc4f78673c4ebeaf8aa957e10aa90fb93fd48d27d34c9c1f5052edcc34d3da3c9ccab253358bc1d039fae4740eb658bc2b97b6ff12caca1ed00b3c4385293944f8f14fb6214a9e907d4290003d3683d8130e3717f757b3cd254444dee11054e83f0be1f32be6a43df70a686400a79cb2093b317f6602d963f62bde28f2ed7e3b1550c7d9b359cf09862556752e51f0d374e39134b72ae45cc4e4ce29662ced23c5d273cdb042d512aa6e721086f2394f902b22a22d4aec70c0d3dd613eceb88f55fc352b0297bd2dc3de09a03305350a59e7700d147adf6748a23f40a9096fa","beginAt":"2018-05-30T20:18:03.328Z"})
})

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
