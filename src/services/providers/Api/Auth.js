//import Request from '../Request'
import * as conf from '../../config'
//import * as apiServices from '../Api'
import * as sessionStorage from '../../SessionStorage'
import req from '../../Request'
import request from '../../Request'


export const access = () => {
   return new Promise((resolve, reject) => {
      req.post(`/session/access`, {  },
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      ).then(function (res){
        if(res.status === 402)
          reject('Licencia vencida')

        res.data.success = true
        resolve(res)
      }).catch(error => {
          reject(error)
      })
     })
}

export const refreshToken = () => {
  return new Promise((resolve, reject) => {
    req.post(
      `/oauth/token`, {
      'grant_type': 'refresh_token',
      'refresh_token': sessionStorage.getRefreshToken(),
      'client_id': conf.API_CLIENT_ID,
      'client_secret': conf.API_CLIENT_SECRET,
      'scope': conf.API_SCOPE
    },
    {
      headers: {
        'Accept': 'application/json'
      }
    }).then(function (res){
        resolve(res)
      });
    })
}

export function signin (user, pass) {
  alert("here, I am!!")
  console.log(req)
  return new Promise((resolve, reject) => {
    request.post(`/oauth/token`,
      {
        username: user,
        password: pass,
        grant_type: 'password',
        scope: conf.API_SCOPE,
        client_secret: conf.API_CLIENT_SECRET,
        client_id: conf.API_CLIENT_ID
      }
      ,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then(function (res){
      if(res.status !== 200)
        reject({message: 'User or password incorrect'})

      resolve(res)
    }).catch(function(error){
          reject(error)
    })
  })
}

export function signout () {
  return new Promise((resolve, reject) => {

    let currentDate = new Date()
    req.delete('/session/access/' + currentDate.toString() /*, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
        }
      }*/)
      .then(response => {
        resolve(true)
      }).catch(error => {
        resolve(error)
      })
  })
}

export function scopes () {
  return new Promise((resolve, reject) => {
    return req('/oauth/scopes', {
        method: "GET",
        headers: {
          'Accept': 'application/json',
        }
      })
      .then(response => {
        resolve(response)
      }).catch(error => {
          reject(error)
      })
  })
}
export const register = (req, username, password) => {
  return req.post('/register', {username, password})
    .then(() => signin(username, password))
}



