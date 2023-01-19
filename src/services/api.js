import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3006'
})

export default apiCodeBurger
