import { autoInjectable } from 'tsyringe'

import { HTTPClient } from '../../shared/HTTPClient'
import { Config } from '@config/Config'
import { IDeal } from './interfaces/IPipedrive'

@autoInjectable()
export class Pipedrive {
  private client: HTTPClient
  private token: string
  constructor(private config?: Config) {
    const { pipedrive: { url, token } } = this.config!.get()
    this.token = token
    this.client = new HTTPClient(url)
  }

  public async getDeals(): Promise<IDeal> {
    return this.client.get(`deals?api_token=${this.token}`)
  }
}
