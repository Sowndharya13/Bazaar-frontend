import axios from 'axios'
const API_URL = 'http://localhost:8080'
const AllowedResponseStatus = [200, 201, 202, 204, 302]

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
        `${API_URL}` + uri
      )
      .then((response) => {})
      .catch(this.errorHandler)
  }

  get (uri) {
    return axios.get(`${API_URL}` + uri)
      .then(this.responseChecker)
      .catch(this.errorHandler)
  }

  post (uri, data) {
    return axios
      .post(`${API_URL}` + uri, data)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err.response)
      })
  }

  put (uri, data) {
    return axios
      .put(`${API_URL}` + uri, data)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err.response)
      })
  }

  delete (uri) {
    return axios
      .delete(`${API_URL}` + uri)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err.response)
      })
  }

  imagePut (uri, data) {
    return axios
      .put(uri, data)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err.response)
      })
  }

  responseChecker (response) {
    if (AllowedResponseStatus.includes(response.status)) {
      return response.data
    }
    if (response.data.errorCode === 401) {
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
