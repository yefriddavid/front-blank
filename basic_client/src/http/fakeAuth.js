import * as AppStorage from "../services/AppStorage"

export const fakeAuth = {
  isAuthenticated(){
    return AppStorage.loggedIn()
  },
  tokenIsValidDate(){
    return AppStorage.fullLoggedIn()
  }
}
