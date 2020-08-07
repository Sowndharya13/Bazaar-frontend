import axios from 'axios'
const API_URL = ''

const AllowedResponseStatus = [200, 201, 202, 204, 302]
// var token;
// if (Cookies.has('token')) {
//   token = Cookies.get('token')
// }

export var tokenVal = ''

export class HelperService {
  login (uri) {
    return axios
      .get(`${API_URL}` + uri)
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  logout (uri) {
    return axios
      .put(
        `${API_URL}` + uri,
        {},
        {
          headers: this.getHeaders(),
          withCredentials: false
        }
      )
      .then((response) => {})
      .catch(this.errorHandler)
  }

  getM (uri, token) {
    tokenVal = token
    return axios
      .get(`${API_URL}` + uri, {
        headers: {
          Authorization: 'sven ' + token
        },
        withCredentials: false
      })
      .then(this.responseChecker)
      .catch(this.errorHandler)
    // let stateToken = token;
    // return axios
    //   .get(`${API_URL}` + uri, {
    //     headers: {
    //       Authorization: "sven " + tokenVal
    //     },
    //     withCredentials: false
    //   })
    //   .then(this.responseChecker)
    //   .catch(this.errorHandler);
  }

  get (uri) {
    return axios
      .get(`${API_URL}` + uri, {
        headers: this.getHeaders(),
        withCredentials: false
      })
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  post (uri, data) {
    return axios
      .post(`${API_URL}` + uri, data, {
        headers: this.getHeaders(),
        withCredentials: false
      })
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  put (uri, data) {
    return axios
      .put(`${API_URL}` + uri, data, {
        headers: this.getHeaders(),
        withCredentials: false
      })
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  delete (uri) {
    return axios
      .delete(`${API_URL}` + uri, {
        headers: this.getHeaders(),
        withCredentials: false
      })
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  patch (uri, data) {
    return axios
      .patch(`${API_URL}` + uri, data, {
        headers: this.getHeaders(),
        withCredentials: false
      })
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  imagePut (uri, data) {
    return axios
      .put(uri, data, {
        headers: {
          'content-type': data.type
        }
      })
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  // Token Manager
  getHeaders () {
    let defaultHeaders = {}
    const tempToken = tokenVal
    // let tempToken = document.cookie.get('token');
    // if (sessionStorage.getItem("token")) {
    // defaultHeaders = {
    //   Authorization: "sven " + sessionStorage.getItem("token"),
    //   ...defaultHeaders
    // };
    defaultHeaders = {
      Authorization: 'sven ' + tempToken,
      ...defaultHeaders
    }
    var jwtObject = JSON.parse(atob(tempToken.substring(tempToken.indexOf('.') + 1, tempToken.lastIndexOf('.'))))
    if (jwtObject.exp - Math.floor(new Date().getTime() / 1000) < 60) {
      window.reload()
    }
    // }
    // defaultHeaders["Content-Type:"] = "json"
    return defaultHeaders
  }

  responseChecker (response) {
    if (AllowedResponseStatus.includes(response.status)) {
      return response.data
    }
    // If not authorized then reset token
    // and redirect to login page
    if (response.data.errorCode === 401) {
      sessionStorage.removeItem('token')
      // window.location.href = `${REDIRECT_URL}`;
      return Promise.reject(new Error('INVALID_USER'))
    } else {
      const err = new Error(response.statusText)
      err.response = response
      return Promise.reject(err)
    }
  }

  errorHandler (error) {
    var err = new Error(error.response)
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          return Promise.reject(error.response.statusText)
        case 400:
          return Promise.reject(error.response.data)
        case 404:
          return Promise.reject(error.response.data)
        case 403:
          return Promise.reject(error.response.data)
        case 409:
          return Promise.reject(error.response.statusText)
        default:
          // let err = new Error(error.response);
          return Promise.reject(err)
      }
    } else {
      // let err = new Error(error.response);
      return Promise.reject(err)
    }
  }
}

export default HelperService
