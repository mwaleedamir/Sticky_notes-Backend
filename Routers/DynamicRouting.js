import {CreatePage ,GetPage, GetPageById, EditPage, DeletePage} from '../Controllers/DynamicController.js'
import express from 'express'

const router = express.Router()

router.post('/dynamic', CreatePage)
router.get('/dynamic', GetPage)
router.get('/dynamic:id', GetPageById)
router.put('/dynamic:id', EditPage)
router.delete('/dynamic:id', DeletePage)


export default router 