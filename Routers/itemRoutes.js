import express from 'express'
import { CreateItem ,UpdateItems,DeleteItems, GetItems,Getting} from '../Controllers/itemControllers.js'

const router = express.Router()

router.post('/items',CreateItem)
router.get('/items',GetItems)
router.put('/items:id',UpdateItems)
router.delete('/items:id',DeleteItems)
router.get('/', Getting)

export default router