// import * as config from "../services/config"
import * as AppStorage from "../services/SessionStorage"

export const fakeAuth = {
  isAuthenticated(){
    //const authData = sessionStorage.getItem(`${config.PREFIX_SESSION_KEYS}.auth`)
    return AppStorage.loggedIn()
  },
  tokenIsValidDate(){
    return AppStorage.fullLoggedIn()
      /*if(this.isAuthenticated()){
      const authData = sessionStorage.getItem(`${config.PREFIX_SESSION_KEYS}.auth`)
      return true

    }else
      return false*/


  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}
