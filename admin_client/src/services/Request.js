import axios from 'axios'
import {
  //Request,
  appStore as appStorage
} from 'callcenter2_react_components'
import * as apiAuthProvider from './providers/Api/Auth'


const Request = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
})

let isRefreshing = false
let isOlder = false
let refreshSubscribers = []


//Request.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getAccessToken
  /*Request.interceptors.request.use(async (config) => {
  if(appStorage.loggedIn()){
    if(!appStorage.fullLoggedIn() && !isOlder){
      isOlder = true
      try{
        const response = await apiAuthProvider.refreshToken(Request)
        appStorage.setSessionInfoData(response.data)
      }catch(ex){
      }
    }
  }
  const headers = appStorage.getHeaders()
  config.headers["Authorization"] = headers["Authorization"]
  return config
})*/


Request.interceptors.response.use(response => {
  return response;
}, error => {
  //const originalRequest = config;
  const response = error || { response: { status: false } }
  const { status } =response
  if(status === 402) {
    return Promise.reject("licencia vencida")
  } else {
    const rs = Object.assign({}, error)
    if(typeof rs.response === 'undefined'){
      //alert("sss")
      return Promise.reject({status: false, message: 'Not internet connection...'})
    }else{
      return Promise.reject(error);
    }
  }
});


function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

function onRrefreshed(token) {
  refreshSubscribers.map(cb => cb(token));
}


export default Request
