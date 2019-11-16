import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: process.env.API_ENDPOINT
})

function get<T>(url: string, config?: {}): Promise<T> {
  return axios.get(url, config).then((res) => res.data)
}

function post<T>(url: string, data: {}, config?: {}): Promise<T> {
  return axios.post(url, data, config).then((res) => res.data)
}

function put<T>(url: string, data: {}, config?: {}): Promise<T> {
  return axios.put(url, data, config).then((res) => res.data)
}

export { axios }

export default {
  get,
  post,
  put
}
