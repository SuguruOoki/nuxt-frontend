import request from '~/services/request'
import { RSSItem } from '~/types/rssItem'

interface Response {
  items: RSSItem[]
}

export function getRss() {
  return request.get<Response>('/rss')
}
