import expres from 'express'
const router = expres.Router()
import { authUser } from '../controllers/userController.js'

router.post('/login',authUser)

export default router