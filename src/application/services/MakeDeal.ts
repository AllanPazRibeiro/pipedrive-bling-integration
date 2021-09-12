import { Bling } from '@application/facades/Bling'
import { IProduct } from '@application/facades/interfaces/IBling'
import { IDealAndProducts } from '@application/facades/interfaces/IPipedrive'
import { Pipedrive } from '@application/facades/Pipedrive'
import { tokens } from '@di/tokens'
import MongoDBClient from '@infrastructure/mongodb/MongoDBClient'
import { inject, injectable } from 'tsyringe'

@injectable()
export class MakeDeal {
  private collection: string
  constructor(
    @inject(tokens.Pipedrive)
    private pipedrive: Pipedrive,

    @inject(tokens.Bling)
    private bling: Bling,

    @inject(tokens.MongoDBClient)
    private mongo: MongoDBClient,

  ) {
    this.collection = mongo.getCollectionName('Deals')
  }

  private async getProductsBy(dealId: number) {
    const { data } = await this.pipedrive.getDealsProductsBy(dealId)
    return data
  }

  private async getAllWonDeals(): Promise<IDealAndProducts> {
    const { data } = await this.pipedrive.getDeals()
    const products = await Promise.all(data.map(async deal => {
      return this.getProductsBy(deal.id)
    })).then(products => products.flat())

    const dealsMap = new Map()
    dealsMap.set('deals', data)
    dealsMap.set('products', products)

    return {
      products: dealsMap.get('products'),
      deals: dealsMap.get('deals')
    }
  }

  private parseDeals(dealToParse: IDealAndProducts) {
    return dealToParse.deals.flatMap(deal => {
      return dealToParse.products.map(productDeal => ({
        product: {
          descricao: productDeal.name,
          variacoes: {
            name: productDeal.name,
            vlr_unit: productDeal.item_price
          },
          estrutura: {
            componente: {
              nome: productDeal.name,
              codigo: productDeal.id,
              quantidade: deal.products_count
            }
          }
        },
        value: {
          formatted_value: deal.formatted_value,
          currency: deal.currency,
          date_inserted: new Date()
        } 
      }))
    })
  }

  private async saveDeal(dealsToSave: IDealAndProducts) {
    console.log(dealsToSave)
    const db = await this.mongo!.getInstance()
    const dealCollection =  db.collection(this.collection)

    dealCollection

  }

  public async makeDeal() {
    try {
      const deals = await this.getAllWonDeals()
      const parsedDeals = this.parseDeals(deals)
      const parsedDealsToSave = {} as IDealAndProducts
      
      return parsedDeals.forEach(async (parsedDeal) => 
        await Promise.all([
          this.bling.postProduct(parsedDeal as unknown as IProduct),
          this.saveDeal(parsedDealsToSave)
        ])
    )
    } catch (error) {
      console.log('error', error)
      return new Error('error on make deal')
    }
    
  }

}