jest.autoMockOff()
const config = {
  get: jest.fn().mockReturnValue({
    pipedrive: {
      token: '123',
      url: 'https://fakeurl.com.br',
      company: 'nocompany'
    }
  }),
}
import { httpMock, get } from './mocks/HTTPClient.mock'
httpMock()
import { Config } from '@config/Config'
import { Pipedrive } from './Pipedrive'

describe('Pipedrive', () => {
  test('should call http get properly', async () => {
    await new Pipedrive((config as unknown) as Config).getDeals()
    expect(get).toHaveBeenCalledWith('deals?api_token=123')
  })
})
