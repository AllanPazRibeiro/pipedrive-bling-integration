import express, { Express, Router } from 'express'
import * as http from 'http'
import IDatabase from '@presentation/http/server/interface/IDataBase'
import IServerConfig from '@presentation/http/server/interface/IServerConfig'

export default class Server {
  private static instance: Server

  private app!: Express
  private server?: http.Server
  private defaultRouter!: Router
  
  private db?: IDatabase
  
  private constructor(public config: IServerConfig) {
    this.app = express()
    this.initRouter()
  }

  public static create(config: IServerConfig) {
    if (this.instance) return this.instance
    return new Server(config)
  }

  public use(...args: any[]) { this.defaultRouter.use(...args) }
  
  public async startDatabase(db: IDatabase) {
    this.db = db
    
    this.db.connect().catch((err: any) => {
      console.error(err)
      console.error('Exiting...')
      process.exit(1)
    })

    this.db.on('disconnected', () => {
      process.kill(process.pid, 'SIGTERM')
    })

    return this
  }
  

  private initRouter() {
    this.defaultRouter = express.Router()
    this.defaultRouter.use(express.json())
    this.app.disable('x-powered-by')
    this.app.use(this.defaultRouter)
  }

  public listen(port: number) {
    console.info('Starting application')

    this.server = this.app.listen(port, () => {
      console.info(`Application running on :${port}`)
    })

    process.once('SIGTERM', this.onTerminationRequest)
    process.once('SIGINT', this.onTerminationRequest)

    return this
  }

  private closeServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.server) {
        this.server.close((err) => {
          if (err) return reject(err)

          return resolve()
        })
      } else {
        resolve()
      }
    })
  }

  private onTerminationRequest = async () => {
    console.info('Termination request. Shutting down')
    try {
      const promises = [this.closeServer()]
      if (this.db) promises.push(this.db.close())

      await Promise.all(promises)
      console.info('Gracefully terminating')
      process.exit(0)
    } catch (err) {
      console.error('Error on terminating gracefully')
      console.error(err)
      process.exit(1)
    }
  }
}
