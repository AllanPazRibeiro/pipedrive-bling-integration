import { MakeDeal } from "@application/services/MakeDeal"
import { tokens } from "@di/tokens"
import { ok, serverError } from "@presentation/http/helpers/http-helper"
import { Controller } from "@presentation/http/protocols/controller"
import { HttpResponse } from "@presentation/http/protocols/http"
import { inject, injectable } from "tsyringe"

@injectable()
export class MakeDealController implements Controller {
  constructor(
    @inject(tokens.MakeDeal)
    private makeDeal: MakeDeal
  ) {}

  async handle(_httpRequest: any): Promise<HttpResponse> {
    try {
      await this.makeDeal.makeDeal()

      return ok('deal saved successfully')
    } catch (error) {
      console.error(error)
      return serverError(error as Error)
    }
  }

}