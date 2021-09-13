jest.autoMockOff()
const config = {
  get: jest.fn().mockReturnValue({
    bling: {
      token: '123',
      url: 'https://fakeurl.com.br',
    }
  }),
}
import { httpMock, post } from './mocks/HTTPClient.mock'
httpMock()
import { Config } from '@config/Config'
import { Bling } from './Bling'
import { orderMock } from './mocks/Bling.mock'
import { IOrder } from './interfaces/IBling'

describe('Bling', () => {
  test('should call http post properly when post product', async () => {
    await new Bling((config as unknown) as Config).postOrder(orderMock as unknown as IOrder)
    const js2xmlparser = require("js2xmlparser")
    const xml = js2xmlparser.parse('pedido', orderMock)
    expect(post).toHaveBeenCalledWith(`/v2/pedido/json?apikey=123&xml=${xml}`)
  })
})
