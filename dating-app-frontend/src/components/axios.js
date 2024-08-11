import axios from 'axios'

const instance = axios.create({
  // baseURL: "http://localhost:8001"
  baseURL: "https://dating-backend-api-162c657fe482.herokuapp.com"
})

export default instance
