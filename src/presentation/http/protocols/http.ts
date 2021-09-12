export type HttpResponse = {
  statusCode: number
  body: any
}

export type HttpRequest = {
  referer?: any
  route?: any
  url?: string
  method?: any
  userAgent?: any
  remoteAddress?: any
  body?: any
  headers?: any
  params?: any
  customer?: {
    id: string
  }
  query?: any
  request?: any
}
