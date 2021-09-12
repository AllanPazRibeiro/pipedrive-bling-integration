import { inject, injectable } from 'tsyringe'
import { Request, Response, Router } from 'express'
import cors from 'cors'
import { json } from 'express'
import { contentType } from '@presentation/http/middlewares/ContentType'
import { tokens } from '@di/tokens'
import { MakeDealController } from '@presentation/http/controllers/MakeDeal/MakeDealController'
import { adaptRoute } from '@presentation/http/adapters/express/express-route-adapter'

@injectable()
export class Routes {
  constructor(
    @inject(tokens.MakeDealController)
    private MakeDealController: MakeDealController,
  ) {}

  public setupRouter(router: Router) {
    router.use(json())
    router.use(cors())
    router.use(contentType)

    router.get('/v1/status', (_req: Request, res: Response) => {
      res.send('OK')
    })

    router.post(
      '/v1/make-deal',
      adaptRoute(this.MakeDealController)
    )
  }
}
