import express from 'express'
import { CreateItem ,UpdateItems,DeleteItems, GetItems} from '../Controllers/itemControllers.js'

const Itemrouter = express.Router()

Itemrouter.post('/items',CreateItem)
Itemrouter.get('/items',GetItems)
Itemrouter.put('/items/:id',UpdateItems)
Itemrouter.post('/items/:id',DeleteItems)

export default Itemrouter