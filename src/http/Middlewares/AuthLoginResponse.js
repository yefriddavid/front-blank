//import ReactGA from 'react-ga'
import * as appStorage from '../../services/SessionStorage'

export default function* AuthLoginResponse(response) {

  //alert ("login ok")

  let beginAt = new Date()
  //response.data.beginAt = beginAt
  //appStorage.setDataStorage(response.data)
  console.log(appStorage.getDataStorage())
  //
  //console.log(resonse)


  //redirect to home app

  window.location.href = "/myApp/app/home"

}


