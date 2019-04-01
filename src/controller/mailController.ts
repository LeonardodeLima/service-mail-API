import { Request, Response } from 'express'
import { Mail } from '../services/mail'

class MailController {
  public async send (req: Request, res: Response): Promise<Response> {
    const values = Object.assign({}, req.body)

    let mail = new Mail(values.to, values.from, values.subject, values.text)

    const result = await mail.sendMail()
    return res.json(result)
  }
}

export default new MailController()
