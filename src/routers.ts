import { Router } from 'express'
import EmailController from './controller/mailController'

const routers = Router()

routers.post('/sendMail', EmailController.send)

export default routers
