import express from 'express'
import { json } from 'body-parser'
import { router } from './routes'
import { connect as mongoDbConnect } from './services/database'

const start = async() => {
  const app = express()
  const port = process.env.PORT || 8080

  app.use(json())
  app.use(router)
  await mongoDbConnect()
  app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
  });
}

start()
