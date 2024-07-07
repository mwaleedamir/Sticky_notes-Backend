import express from 'express'
import { getuser } from '../Controllers/Admin.js'
import { isAdmin } from '../middleware/verifyToken.js'

const adminRouter = express.Router()

adminRouter.get('/user', isAdmin, getuser)

export default adminRouter
