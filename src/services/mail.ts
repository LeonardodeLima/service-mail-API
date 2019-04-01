import sgMail from '@sendgrid/mail'

export class Mail {
    private to:string
    private from:string
    private subject:string
    private text:string

    public constructor (to?: string, from?: string, subject?: string, text?: string) {
      this.to = to
      this.from = from
      this.subject = subject
      this.text = text
    }

    public async sendMail (): Promise<object> {
      sgMail.setApiKey(process.env.SENDGRID_TOKEN)
      const msg = {
        to: this.to,
        from: this.from,
        subject: this.subject,
        text: this.text
      }

      const result = await sgMail.send(msg)

      return result
    }
}
