import { autoInjectable } from 'tsyringe'

import { HTTPClient } from '../../shared/HTTPClient'
import { Config } from '@config/Config'
import { IOrder, IOrderResponse, IProduct, IProductResponse } from './interfaces/IBling'

@autoInjectable()
export class Bling {
  private client: HTTPClient
  private token: string
  constructor(private config?: Config) {
    const { bling: { url, token } } = this.config!.get()
    this.token = token
    this.client = new HTTPClient(url)
  }

  public async postProduct(product: IProduct): Promise<IProductResponse> {
    return this.client.post(`/v2/produto/json/&apikey=${this.token}`, product)
  }

  public async postOrder(order: IOrder): Promise<IOrderResponse> {
    return this.client.post(`/v2/pedido/json/&apikey=${this.token}`, order)
  }  
}
