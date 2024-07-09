import express from 'express'
import { getuser, deleteUser ,get} from '../Controllers/Admin.js'
import { isAdmin } from '../middleware/verifyToken.js'

const adminRouter = express.Router()

adminRouter.get('/user', isAdmin, getuser)
adminRouter.get('/', isAdmin, get)
adminRouter.post('/delete/:id',isAdmin, deleteUser)

export default adminRouter
