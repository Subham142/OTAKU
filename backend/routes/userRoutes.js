import expres from 'express'
const router = expres.Router()
import { authUser,getUserProfile } from '../controllers/userController.js'
import { protect } from "../middleware/authMiddleware.js";
router.post('/login',authUser)
router.route('/profile').get(protect, getUserProfile)


export default router