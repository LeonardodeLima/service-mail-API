import App from './app'
import * as dotenv from 'dotenv'

dotenv.config()

App.get('/', (req, res) => {
  res.status(202).send('ON')
})

App.listen(4000)
