import { Config } from '@config/Config'
import { container } from '@di/container'
import { tokens } from '@di/tokens'
import createRouter from './http/router/createRouter'
import { Routes } from './http/Routes'
import createServer from './http/server/CreateServer'

const config = new Config().get().serverConfig
const app = createServer(config)

const router = createRouter()
const routes = container.resolve<Routes>(tokens.Routes)

routes.setupRouter(router)
app.use(router)

export default app
