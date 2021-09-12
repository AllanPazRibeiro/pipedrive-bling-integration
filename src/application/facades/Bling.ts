import { autoInjectable } from 'tsyringe'
import { HTTPClient } from '../../shared/HTTPClient'
import { Config } from '@config/Config'
import { IOrder, IProductResponse } from './interfaces/IBling'

@autoInjectable()
export class Bling {
  private client: HTTPClient
  private token: string
  constructor(private config?: Config) {
    const { bling: { url, token } } = this.config!.get()
    this.token = token
    this.client = new HTTPClient(url)
  }

  public async postOrder(order: IOrder): Promise<IProductResponse> {
    const js2xmlparser = require("js2xmlparser")
    const xml = js2xmlparser.parse('pedido', order)

    return this.client.post(
      `/v2/pedido/json?apikey=${this.token}&xml=${xml}`,
    )
  }
}
