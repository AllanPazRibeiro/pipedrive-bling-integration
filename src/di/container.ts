import { container } from 'tsyringe'

import { tokens } from '@di/tokens'
import { Config } from '@config/Config'
import { Routes } from '@presentation/http/Routes'
import MongoDBClient from '@infrastructure/mongodb/MongoDBClient'

// Creates a new child container based on root container
const childContainer = container.createChildContainer()

childContainer.registerSingleton(tokens.Config, Config)
childContainer.registerSingleton(tokens.Routes, Routes)
childContainer.registerSingleton(
  tokens.MongoDBClient,
  MongoDBClient
)


export { childContainer as container }
