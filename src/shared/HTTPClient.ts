import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
} from 'axios'
import { IHeaders, IHTTPClient, IRequestOptions } from './IHTTPClients'

export class HTTPClientError extends Error {
  public name = 'HTTPClientError'
  public code: string
  public message: string

  constructor(error: AxiosError) {
    super(undefined)

    this.code = 'internal_server_error'
    this.message = error.message

    if (error.response?.status === 401) {
      this.code = 'unauthorized'
      this.message = error.response?.data?.suggestedAction || 'Unauthorized'
    }

    if (error.response?.data?.code) {
      this.code = error.response?.data?.code
      this.message = error.response?.data?.message
    }
  }
}

export class HTTPClient implements IHTTPClient {
  private http: AxiosInstance
  private cancelToken = axios.CancelToken

  constructor(
    host: string,
    port?: string,
    timeout = 30000,
    headers?: IHeaders
  ) {
    const baseURL = port ? `${host}:${port}` : host
    this.http = axios.create({
      timeout,
      baseURL,
      responseType: 'json',
    })
    if (headers) {
      this.setDefaultHeaders(headers)
    }
    this.updateInterceptors()
  }

  public get<Response>(
    url: string,
    options?: IRequestOptions
  ): Promise<Response> {
    return this.http.get<Response>(url, options).then(this.getData)
  }

  public post<Response, Body, Headers>(
    url: string,
    data?: Body,
    options?: IRequestOptions<Headers>
  ): Promise<Response> {
    return this.http.post(url, data, options).then(this.getData)
  }

  public delete<Response, Body>(
    url: string,
    _data?: Body,
    options?: IRequestOptions
  ): Promise<Response> {
    return this.http.delete(url, options).then(this.getData)
  }

  public put<Response, Body>(
    url: string,
    data?: Body,
    options?: IRequestOptions
  ): Promise<Response> {
    return this.http.put(url, data, options).then(this.getData)
  }

  public patch<Response, Body>(
    url: string,
    data?: Body,
    options?: IRequestOptions
  ): Promise<Response> {
    return this.http.patch(url, data, options).then(this.getData)
  }

  public getCancelTokenSource(): CancelTokenSource {
    return this.cancelToken.source()
  }

  public updateInterceptors() {
    this.http.interceptors.response.use(this.handleSuccess, this.handleError)
  }

  public cancelRequest(source: CancelTokenSource): boolean {
    try {
      source.cancel(`${source.token} canceled`)
      return true
    } catch (e) {
      return false
    }
  }

  private getData<Response>(response: AxiosResponse<Response>): Response {
    return response.data
  }

  private handleSuccess(response: AxiosResponse): AxiosResponse {
    return response
  }

  private handleError(error: AxiosError): Promise<AxiosError> {
    console.log('error', error)
    return Promise.reject(new HTTPClientError(error))
  }

  public setDefaultHeaders(headers: IHeaders): HTTPClient {
    this.http.interceptors.request.use((config) => {
      config.headers = headers
      return config
    })
    return this
  }
}
