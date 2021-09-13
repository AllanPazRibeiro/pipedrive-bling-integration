jest.autoMockOff()

import { MakeDeal } from './MakeDeal'
import { Pipedrive } from '@application/facades/Pipedrive'
import { Bling } from '@application/facades/Bling'

const mongoFunctionsMock = {
  insert: jest.fn(),
}

const mongoDBClient = {
  getCollectionName: jest.fn(),
  getInstance: jest.fn().mockResolvedValue({
    collection: jest.fn().mockResolvedValue(mongoFunctionsMock),
  }),
}

const pipedrive = {
  getDealsProductsBy: jest.fn().mockResolvedValue({
    data: {
      id: 1,
      deal_id: 1,
      order_nr: 1,
      product_id: 1,
      item_price: 1,
      discount_percentage: 1,
      duration: 1,
      sum_no_discount: 1,
      sum: 1,
      currency: 'BRL',
      enabled_flag: true,
      add_time: 'date',
      comments: 'comments',
      active_flag: true,
      tax: 1,
      name: 'name',
      sum_formatted: 'summ',
      quantity_formatted: 'R$ 1,00',
      quantity: 1
    }
  }),
  getDeals: jest.fn().mockResolvedValue({
    success: true,
    data: [
        {
            id: 3,
            deal_id: 1,
            order_nr: 1,
            product_id: 1,
            product_variation_id: null,
            item_price: 300000,
            discount_percentage: 0,
            duration: 1,
            duration_unit: null,
            sum_no_discount: 0,
            sum: 300000,
            currency: 'BRL',
            enabled_flag: true,
            add_time: '2021-09-12 17:01:05',
            last_edit: null,
            comments: 'Venda de armadura para vence thanos',
            active_flag: true,
            tax: 0,
            name: 'Armadura',
            sum_formatted: 'R$ 300.000',
            quantity_formatted: 1,
            quantity: 1
        }
    ],
    additional_data: {
        products_quantity_total: 1,
        products_sum_total: 300000,
        variations_enabled: false,
        products_quantity_total_formatted: 1,
        products_sum_total_formatted: 'R$ 300.000',
        pagination: {
            start: 0,
            limit: 100,
            more_items_in_collection: false
        }
    }
}),
}

const bling = {
  postOrder: jest.fn(),
}

describe(MakeDeal, () => {
  test('should call getDealsProductsBy properly' , async () => {
    const makeDeal = new MakeDeal(
      pipedrive as unknown as Pipedrive,
      bling as unknown as Bling,
      mongoDBClient as any
     )

     await makeDeal.getProductsBy(123)

     expect(pipedrive.getDealsProductsBy).toHaveBeenCalledWith(123)
  })

  test('should return the products by deal parsed', async () => {
    const makeDeal = new MakeDeal(
      pipedrive as unknown as Pipedrive,
      bling as unknown as Bling,
      mongoDBClient as any
     )

     const wonDeals = await makeDeal.getAllWonDeals()

     expect(wonDeals).toEqual({
      products: [
        {
          id: 1,
          deal_id: 1,
          order_nr: 1,
          product_id: 1,
          item_price: 1,
          discount_percentage: 1,
          duration: 1,
          sum_no_discount: 1,
          sum: 1,
          currency: 'BRL',
          enabled_flag: true,
          add_time: 'date',
          comments: 'comments',
          active_flag: true,
          tax: 1,
          name: 'name',
          sum_formatted: 'summ',
          quantity_formatted: 'R$ 1,00',
          quantity: 1
        }
      ],
      deals: [
        {
          id: 3,
          deal_id: 1,
          order_nr: 1,
          product_id: 1,
          product_variation_id: null,
          item_price: 300000,
          discount_percentage: 0,
          duration: 1,
          duration_unit: null,
          sum_no_discount: 0,
          sum: 300000,
          currency: 'BRL',
          enabled_flag: true,
          add_time: '2021-09-12 17:01:05',
          last_edit: null,
          comments: 'Venda de armadura para vence thanos',
          active_flag: true,
          tax: 0,
          name: 'Armadura',
          sum_formatted: 'R$ 300.000',
          quantity_formatted: 1,
          quantity: 1
        }
      ]
    }
     )
  })

})