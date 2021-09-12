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
import { productMock } from './mocks/Bling.mock'
import { IProduct } from './interfaces/IBling'

describe('Bling', () => {
  test('should call http post properly when post product', async () => {
    await new Bling((config as unknown) as Config).postProduct(productMock as unknown as IProduct)
    expect(post).toHaveBeenCalledWith('/v2/produto/json/&apikey=123', productMock)
  })
})
