import axios from 'axios'

let headers = {}

const axiosInstance = axios.create({
  baseURL: 'https://cleanhub-api.onrender.com/api/auth',
  // baseURL: 'http://localhost:8800/api/auth',
  headers,
})

axiosInstance.interceptors.request.use(
  function async(config) {
    const token = localStorage.getItem('token')
    config.headers.token = token
    config.headers.contentType = 'application/json'
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
export default axiosInstance
