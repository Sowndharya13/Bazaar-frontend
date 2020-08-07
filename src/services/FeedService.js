import HelperService from './HelperService.js'

const Service = new HelperService()

// const API_URL = process.env.VUE_APP_ROOT_API;

// var Token = sessionStorage.getItem("token");

export class FeedService {
  // Login and Auth

  signIn (login) {
    console.log('Heyheyyyy: ', login)
    const url = `/api/__/auth/login?n=${login.n}&ru=${login.ru}`
    return Service.login(url)
  }

  logout () {
    const url = '/api/logout'
    return Service.logout(url)
  }
}
