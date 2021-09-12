import { Bling } from '@application/facades/Bling'
import { IOrder } from '@application/facades/interfaces/IBling'
import { IDealAndProducts } from '@application/facades/interfaces/IPipedrive'
import { Pipedrive } from '@application/facades/Pipedrive'
import { tokens } from '@di/tokens'
import MongoDBClient from '@infrastructure/mongodb/MongoDBClient'
import { inject, injectable } from 'tsyringe'

interface IDataToSave {
    pedido: {
        cliente: {
            nome: string;
        };
        value: {
            formatted_value: string;
            currency: string;
            date_inserted: Date;
        };
        itens: {
            item: {
                codigo: number;
                descricao: string;
                qtde: number;
                vlr_unit: number;
                un: number;
            }[];
        };
    };
}

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
    return dealToParse.deals.flatMap(deal => ({
      pedido: {
        cliente: {
          nome: deal.org_name
        },
        value: {
          formatted_value: deal.formatted_value,
          currency: deal.currency,
          date_inserted: new Date()
        },
        itens: {
          item: dealToParse.products.map(productDeal => ({
            codigo: productDeal.id,
            descricao: productDeal.comments,
            qtde: productDeal.quantity,
            vlr_unit: productDeal.item_price,
            un: productDeal.quantity
        }))
        }
      },
    }))
  }

  private async saveDeal(dealsToSave: IDataToSave[]) {
    const db = await this.mongo!.getInstance()
    const dealCollection =  db.collection(this.collection)
    dealCollection.insertOne(dealsToSave[0])
  }

  public async makeDeal() {
  const deals = await this.getAllWonDeals()
      const parsedDeals = this.parseDeals(deals)
      
      return parsedDeals.forEach(async (parsedDeal) => 
        await Promise.all([
          this.bling.postOrder({ 
            client: parsedDeal.pedido.cliente,
            itens: parsedDeal.pedido.itens 
          } as unknown as IOrder),
          this.saveDeal(parsedDeals as unknown as IDataToSave[])
        ]).catch(err => {throw err})
    )
    
  }

}