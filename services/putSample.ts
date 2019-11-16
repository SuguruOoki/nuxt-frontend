/* eslint-disable camelcase */
/* eslintj */
import request from '~/services/request'
import { Sample } from '~/types/Sample'

interface Data {
  sample: string | null
}

export function putSample(data: Data) {
  const {
    sample,
    profileImageFile
  } = data
  const formData = new FormData()
  formData.append('sample', sample || '')
  if (profileImageFile) {
    formData.append('profile_image_file', profileImageFile)
  }
  return request.put<Mentor>('/putSample', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
