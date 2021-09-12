import { Controller } from '@presentation/http/protocols/controller'
import { HttpRequest } from '@presentation/http/protocols/http'
import { Response, Request } from 'express'

export const adaptRoute = (controller: Controller): any => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode > 299) {
      return res
        .status(httpResponse.statusCode)
        .json(httpResponse.body.message)
    }
    return res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
