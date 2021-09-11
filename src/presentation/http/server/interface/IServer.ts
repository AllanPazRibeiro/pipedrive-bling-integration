import IDatabase from "@presentation/http/server/interface/IDataBase";

interface IServer {
  use(...args: any[]): void
  listen(port: number): void
  startDatabase(db: IDatabase): Promise<void>
}

export default IServer