import axios from 'axios'
import * as conf from './config'
import * as apiAuthProvider from './providers/Api/Auth'
import * as appStorage from './SessionStorage'

const Request = axios.create({
  baseURL: conf.API_ENDPOINT,
})

let isRefreshing = false
let isOlder = false
let refreshSubscribers = []


//Request.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getAccessToken
Request.interceptors.request.use(async (config) => {
  if(appStorage.loggedIn()){
    if(!appStorage.fullLoggedIn() && !isOlder){
      isOlder = true
      try{
        const response = await
          apiAuthProvider.refreshToken(Request)

        appStorage.setSessionInfoData(response.data)
      }catch(ex){
        alert("all bad")

      }
    }
  }
  const headers = appStorage.getHeaders()
  config.headers["Authorization"] = headers["Authorization"]
  console.log(config)
  return config
})

Request.interceptors.response.use(response => {

  return response;
}, error => {
  //alert("xxxx")
  const { config } = error
  //console.log(error)
  //const { response: { status } } = error || { response: { status: false } }
  const response = error || { response: { status: false } }
  let { status } =response

  const originalRequest = config;

  //console.log("Si el api retorna un 498 refrescamos el token")

  if (status === 498) {
    if (!isRefreshing) {
      isRefreshing = true;
      Request.post("oapiServices.token",
        {
        'grant_type': 'refresh_token',
          'refresh_token': sessionStorage.getRefreshToken(), //sessionStorage.getItem('refresh_token'),
        'client_id': conf.API_CLIENT_ID,
        'client_secret': conf.API_CLIENT_SECRET,
        'scope': conf.API_SCOPE
        }
        ).then(newToken => {
          //apiServices.setSignData(newToken.data)
          isRefreshing = false
          onRrefreshed(newToken.data.access_token)
          return newToken
        }).error( e => {
          console.log("Aca se redirecciona al home de la pagina web")
        } );
    }

    const retryOrigReq = new Promise((resolve, reject) => {
      subscribeTokenRefresh(token => {
        originalRequest.headers['Authorization'] = 'Bearer ' + sessionStorage.getAccessToken()
        resolve(Request(originalRequest));
      });
    });
    return retryOrigReq
  } else if(status === 402) {
      return Promise.reject("licencia vencida")
  } else {
        const rs = Object.assign({}, error)
        if(typeof rs.response === 'undefined'){
          return Promise.reject({status: false, message: 'Not internet connection...'})
        }else{
          //reject(rs)
          return Promise.reject(error);
        }
  }
  //return Promise.reject(error);
});


function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

function onRrefreshed(token) {
  refreshSubscribers.map(cb => cb(token));
}


export default Request

