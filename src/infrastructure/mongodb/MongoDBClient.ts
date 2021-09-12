import { Config } from '@config/Config'
import { tokens } from '@di/tokens'
import IDatabase from '@presentation/http/server/interface/IDataBase'
import { EventEmitter } from 'events'
import { MongoClient, Db } from 'mongodb'
import { inject, injectable } from 'tsyringe'

@injectable()
export class MongoDBClient extends EventEmitter implements IDatabase {
  private client: MongoClient | null = null
  private db: Promise<Db> | null = null

  private uri: string
  private database: string
  private maxConnectionRetries: number

  constructor( 
    @inject(tokens.Config)
    config: Config
  ) {
    super()

    this.uri = `mongodb+srv://${config.get().mongoDB.user}:${config.get().mongoDB.password}@cluster0.vblyc.mongodb.net/${config.get().mongoDB.database}`
    this.database = config.get().mongoDB.database,
    this.maxConnectionRetries = config.get().mongoDB.maxConnectionRetries
  }

  public connect() {
    this.db = new Promise<Db>(async (resolve, reject) => {
      for (
        let attempts = 1;
        attempts <= this.maxConnectionRetries;
        attempts += 1
      ) {
        console.info(
          'Attempting to connect to MongoDB %d out of %d',
          attempts,
          this.maxConnectionRetries
        )

        try {
          this.client = await MongoClient.connect(this.uri)

          this.client?.on('serverHeartbeatFailed', () => {
            console.info('Server hearbeat failed on MongoDB connection')
            this.emit('disconnected')
          })

          console.info('Connected to mongodb')

          const db = this.client?.db(this.database)

          return resolve(db as Db)
        } catch (err) {
          console.error('Attempt %d to connect to MongoDB failed', attempts)
          console.error(err)

          if (attempts === this.maxConnectionRetries) {
            return reject(new Error('Max attempts reached on mongo connection'))
          }
        }
      }
    })

    return this.db
  }

  public async getInstance(): Promise<Db> {
    if (this.db) {
      return this.db
    }

    return this.connect()
  }

  public getCollectionName(name: string) {
    return `${name}`
  }

  public async close() {
    if (this.client) {
      await this.client.close()
    }

    return
  }
}

export default MongoDBClient
