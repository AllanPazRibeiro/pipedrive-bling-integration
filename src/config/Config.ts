import dotenv from 'dotenv'
import { injectable } from 'tsyringe'

interface Configuration {
  mongoDB: {
    enabled: boolean,
    user: string,
    password: string,
    database: string,
    maxConnectionRetries: number,
  }
  
  serverConfig: {
    port: number
    serviceName: string
    environment: string
    instance?: string
  }  
}

@injectable()
export class Config {
  private readonly config: Configuration

  constructor() {
    this.config = this.getConfigFromEnv()
  }

  public get() {
    return this.config
  }

  private getConfigFromEnv(): Configuration {
    dotenv.config()

    return {
      mongoDB: {
        enabled: Boolean(process.env.MONGO_ENABLED) || true,
        user: process.env.MONGO_USER || '',
        password: encodeURIComponent(process.env.MONGO_PASSWORD as string) || '',
        database: process.env.MONGO_DB || '',
        maxConnectionRetries: Number(process.env.MAX_CONNECTION_RETRIES) || 3
      },
      serverConfig: {
        serviceName: process.env.SERVICE_NAME || 'no-name',
        environment: process.env.NODE_ENV || 'development',
        port: Number(process.env.PORT) || 8001,
      }
    }
  }
}
