interface IDatabase {
   connect(): Promise<any>
   close(): Promise<void>
   on(event: string | symbol, listener: (...args: any[]) => void): void
}

export default IDatabase