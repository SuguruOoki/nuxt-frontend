import request from '~/services/request'
import { Sample } from '~/types/sample'

interface Response {
  token: string
  sample: Sample
}

export function postSamle(email: string, password: string) {
  return request.post<Response>('/sample', { email, password })
}
