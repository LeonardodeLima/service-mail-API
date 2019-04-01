import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routers from './routers'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(bodyParser.json())
      this.express.use(bodyParser.urlencoded({ extended: false }))
      this.express.use(cors())
    }

    private routes ():void {
      this.express.use(routers)
    }
}
export default new App().express
