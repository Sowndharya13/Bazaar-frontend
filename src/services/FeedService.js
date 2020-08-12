import HelperService from './HelperService.js'

const Service = new HelperService()

export class FeedService {
  // Login and Auth

  signIn (loginCred) {
    console.log('Heyheyyyy: loginCredloginCred', loginCred)
    const url = `/api/auth/login?email=${loginCred.email}&pwd=${loginCred.password}`
    return Service.login(url)
  }

  signUp (userCred) {
    console.log('signup service called with user data: ', userCred)
    const url = '/user'
    return Service.post(url, userCred)
  }

  logout () {
    const url = '/api/logout'
    return Service.logout(url)
  }

  getAllUsers () {
    const url = '/user'
    return Service.get(url)
  }

  getUserById (userId) {
    const url = '/user/' + userId
    return Service.get(url)
  }

  getAllStores () {
    const url = '/store'
    return Service.get(url)
  }

  getStoresOwnedByUser (userId) {
    const url = '/store/user/' + userId
    return Service.get(url)
  }

  getAllProducts () {
    const url = '/product'
    return Service.get(url)
  }

  getAllProductsByStore (storeId) {
    const url = '/product/store/' + storeId
    return Service.get(url)
  }

  createStore (storeData) {
    console.log('in feed service. create store', storeData)
    const url = '/store'
    return Service.post(url, storeData)
  }
}
