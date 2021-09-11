import 'reflect-metadata'
import app from '@presentation/App'
import { container } from '@di/container'
import { tokens } from '@di/tokens'
import { Config } from '@config/Config'
const config = container.resolve(tokens.Config) as Config
const { serverConfig: { port }} = config.get()

app.listen(port)
