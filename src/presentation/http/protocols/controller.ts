import { HttpResponse, HttpRequest } from "@presentation/http/protocols/http"

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
