import IServer from "./interface/IServer"
import IServerConfig from "./interface/IServerConfig"
import Server from "./Server"

const createServer = (config: IServerConfig): IServer => {
  return Server.create(config) as unknown as IServer
}

export default createServer
