import { injectable } from 'tsyringe'

import { Request, Response, Router } from 'express'
import cors from 'cors'
import { json } from 'express'
import { contentType } from '@presentation/http/middlewares/ContentType'

@injectable()
export class Routes {
  constructor() {}

  public setupRouter(router: Router) {
    router.use(json())
    router.use(cors())
    router.use(contentType)

    router.get('/v1/status', (_req: Request, res: Response) => {
      res.send('OK')
    })
  }
}
