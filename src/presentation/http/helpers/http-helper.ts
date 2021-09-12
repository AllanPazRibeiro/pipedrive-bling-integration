import { ServerError } from "@presentation/http/errors/server-error"
import { HttpResponse } from "@presentation/http/protocols/http"

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(String(error.stack)),
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
})
