import { Router } from 'express'
import { errorHandler } from '../middlewares'

const router = Router()

router.get('/', (req, res) => {
  return res.status(200).json('hello world!')
})
router.use(errorHandler)

export {
  router
}
