import axios, { AxiosError, AxiosResponse, isAxiosError, AxiosHeaderValue } from 'axios'
import { IHeaderProps } from '@/api/Interface'

export const BaseURL = process.env.NEXT_PUBLIC_API_URL

export const defaultHeaders: IHeaderProps = {
  isAuth: true,
  AdditionalParams: {},
  isJsonRequest: true,
  api_key: true,
  isFormData: false,
}
export type UserData = Record<string, any>
export interface AdditionalHeaders {
  [key: string]: AxiosHeaderValue
}

export const ApiPostNoAuth = (type: string, userData?: UserData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + type, userData, getHttpOptions({ ...defaultHeaders, isAuth: false }))
      .then((response: AxiosResponse) => {
        if (response.data.statusCode === 400) {
          reject({ status: 400, message: response.data.body })
        } else {
          resolve(response.data)
        }
      })
      .catch((error: AxiosError) => reject(error))
  })
}

export const ApiPutNoAuth = (type: string, userData: UserData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + type, userData, getHttpOptions({ ...defaultHeaders, isAuth: false }))
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (isAxiosError(error)) {
          if (error.response?.data?.error) {
            reject(error.response.data.error)
          } else {
            reject(error)
          }
        } else {
          reject(error)
        }
      })
  })
}

export const ApiGetNoAuth = (type: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseURL + type, getHttpOptions({ ...defaultHeaders, isAuth: false }))
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

export const ApiGet = (type: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts', getHttpOptions())
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (error.response?.status === 401) {
          localStorage.clear()
        }
        if (error?.response?.data?.error) {
          reject(error.response.data.error)
        } else {
          reject(error)
        }
      })
  })
}

export const ApiPost = (type: string, userData?: UserData, AdditionalHeader?: AdditionalHeaders) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + type, userData, {
        ...getHttpOptions({ ...defaultHeaders, ...AdditionalHeader }),
      })
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (error.response?.status === 401) {
          localStorage.clear()
        }
        if (error?.response?.data?.error) {
          reject(error.response.data.error)
        } else {
          reject(error)
        }
      })
  })
}

export const ApiPut = (type: string, userData: UserData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseURL + type, userData, getHttpOptions())
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.clear()
        }
        if (error?.response?.data?.error) {
          reject(error.response.data.error)
        } else {
          reject(error)
        }
      })
  })
}

export const ApiPatch = (type: string, userData: UserData) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(BaseURL + type, userData, getHttpOptions())
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.clear()
        }
        if (error?.response?.data?.error) {
          reject(error.response.data.error)
        } else {
          reject(error)
        }
      })
  })
}

export const ApiDelete = (type: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseURL + type, getHttpOptions())
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.clear()
        }
        if (error?.response?.data?.error) {
          reject(error.response.data.error)
        } else {
          reject(error)
        }
      })
  })
}

export const ApiGetBuffer = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET', mode: 'no-cors' })
      .then((response) => {
        if (response.ok) {
          return response.arrayBuffer()
        } else {
          resolve(null)
        }
      })
      .then((buffer) => resolve(buffer))
      .catch((error) => reject(error))
  })
}

export const getHttpOptions = (options = defaultHeaders) => {
  let headers: Record<string, string> = {}
  if (options?.isAuth) {
    if (localStorage.getItem('token')) {
      headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    }
  }
  if (options?.isJsonRequest && !options?.isFormData) {
    headers['Content-Type'] = 'application/json'
  }
  if (options?.isFormData) {
    headers['Content-Type'] = 'multipart/form-data'
  }
  if (options?.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams }
  }
  return { headers }
}
