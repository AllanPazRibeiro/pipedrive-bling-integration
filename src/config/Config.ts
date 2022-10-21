import dotenv from 'dotenv'
import { injectable } from 'tsyringe'

interface Configuration {
  mongoDB: {
    enabled: boolean
    database: string
    host: string
    port: number
    maxConnectionRetries: number
  }
  
  serverConfig: {
    port: number
    serviceName: string
    environment: string
    instance?: string
  },

  pipedrive: {
    url: string,
    company: string,
    token: string
  }

  bling: {
    url: string,
    token: string
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
        database: process.env.MONGO_DB || 'PIPEDRIVEBING',
        host: process.env.MONGO_HOST || 'localhost',
        port: Number(process.env.MONGO_DB_PORT) || 27017,
        maxConnectionRetries: Number(process.env.MAX_CONNECTION_RETRIES) || 3,
      },
      serverConfig: {
        serviceName: process.env.SERVICE_NAME || 'no-name',
        environment: process.env.NODE_ENV || 'development',
        port: Number(process.env.PORT) || 8001,
      },
      pipedrive: {
        url: process.env.PIPEDRIVE_URL || '',
        company: process.env.PIPEDRIVE_COMPANY || '',
        token: process.env.PIPEDRIVE_TOKEN || ''
      },

      bling: { 
        url: process.env.BLING_URL || '',
        token: process.env.BLING_TOKEN || ''
      }

    }
  }
}
