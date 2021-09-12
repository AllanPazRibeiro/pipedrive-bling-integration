import 'reflect-metadata'
import { Config } from '@config/Config'
import { tokens } from '@di/tokens'
import app from '@presentation/App'
import { container } from '@di/container'
import MongoDBClient from '@infrastructure/mongodb/MongoDBClient'

const config = new Config()

if (config.get().mongoDB.enabled) {
  app.startDatabase(container.resolve(tokens.MongoDBClient) as MongoDBClient)
}

app.listen(config.get().serverConfig.port)
