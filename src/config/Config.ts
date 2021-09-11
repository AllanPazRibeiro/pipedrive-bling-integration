import dotenv from 'dotenv'
import { injectable } from 'tsyringe'

interface Configuration {
  
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
      serverConfig: {
        serviceName: process.env.SERVICE_NAME || 'no-name',
        environment: process.env.NODE_ENV || 'development',
        port: Number(process.env.PORT) || 8001,
      }
    }
  }
}
