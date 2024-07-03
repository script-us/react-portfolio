import axios, { AxiosResponse } from 'axios'
import { Post } from './interface'

export const testApi = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (error?.response?.data?.error) {
          reject(error.response.data.error)
        } else {
          reject(error)
        }
      })
  })
}

export const testPostApi = (userData: Post) => {
  return new Promise((resolve, reject) => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', userData)
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (error?.response?.data?.error) {
          reject(error.response.data.error)
        } else {
          reject(error)
        }
      })
  })
}
