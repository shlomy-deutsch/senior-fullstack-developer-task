import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true

export const loginUser = (username) => {
  return axios.post(`/users/login/${username}`)
}