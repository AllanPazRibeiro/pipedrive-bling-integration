import {
  AxiosRequestConfig,
  CancelToken,
  CancelTokenSource,
} from 'axios'
import { HTTPClient } from './HTTPClient';

export interface IHeaders {
  [key: string]: string | undefined
}

export interface IRequestOptions<H = IHeaders> {
  cancelToken?: CancelToken
  params?: AxiosRequestConfig['params']
  headers?: H
}

export interface IHTTPClient {
   get<Response>(
    url: string,
    options?: IRequestOptions
  ): Promise<Response>

  post<Response, Body, Headers>(
    url: string,
    data?: Body,
    options?: IRequestOptions<Headers>
  ): Promise<Response>

  delete<Response, Body>(
    url: string,
    _data?: Body,
    options?: IRequestOptions
  ): Promise<Response>

  put<Response, Body>(
    url: string,
    data?: Body,
    options?: IRequestOptions
  ): Promise<Response>

  patch<Response, Body>(
    url: string,
    data?: Body,
    options?: IRequestOptions
  ): Promise<Response>

  getCancelTokenSource(): CancelTokenSource

  updateInterceptors(): void

  cancelRequest(source: CancelTokenSource): boolean

  setDefaultHeaders(headers: IHeaders): HTTPClient
}