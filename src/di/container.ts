import { container } from 'tsyringe'

import { tokens } from '@di/tokens'
import { Config } from '@config/Config'
import { Routes } from '@presentation/http/Routes'
import MongoDBClient from '@infrastructure/mongodb/MongoDBClient'
import { MakeDealController } from '@presentation/http/controllers/MakeDeal/MakeDealController'
import { Pipedrive } from '@application/facades/Pipedrive'
import { Bling } from '@application/facades/Bling'
import { MakeDeal } from '@application/services/MakeDeal'

// Creates a new child container based on root container
const childContainer = container.createChildContainer()

childContainer.registerSingleton(tokens.Config, Config)
childContainer.registerSingleton(tokens.Routes, Routes)
childContainer.registerSingleton(
  tokens.MongoDBClient,
  MongoDBClient
)
childContainer.register(
  tokens.MakeDealController,
  MakeDealController
)
childContainer.register(
  tokens.Pipedrive,
  Pipedrive
)
childContainer.register(
  tokens.Bling,
  Bling
)
childContainer.register(
  tokens.MakeDeal,
  MakeDeal
)


export { childContainer as container }
