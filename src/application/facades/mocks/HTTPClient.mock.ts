export const get = jest.fn()
export const post = jest.fn()
export const put = jest.fn()

export const httpMock = () =>
  jest.mock('@shared/HTTPClient', () => ({
    HTTPClient: jest.fn().mockImplementation(() => ({
      get,
      post,
      put,
    })),
  }))

