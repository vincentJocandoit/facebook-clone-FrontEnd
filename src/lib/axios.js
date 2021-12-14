import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
  withCredentials: true,
})

export default instance
