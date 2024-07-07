import express from 'express'
import { getuser, deleteUser } from '../Controllers/Admin.js'
import { isAdmin } from '../middleware/verifyToken.js'

const adminRouter = express.Router()

adminRouter.get('/user', isAdmin, getuser)
adminRouter.post('/delete/:id',isAdmin, deleteUser)

export default adminRouter
