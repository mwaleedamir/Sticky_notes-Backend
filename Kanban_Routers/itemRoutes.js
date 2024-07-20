import express from 'express'
import { CreateItem ,UpdateItems,DeleteItems, GetItems} from '../Kanban_Controllers/itemControllers.js'

const Itemrouter = express.Router()

Itemrouter.post('/items',CreateItem)
Itemrouter.get('/items',GetItems)
Itemrouter.put('/items/:id',UpdateItems)
Itemrouter.delete('/items/:id',DeleteItems)
 
export default Itemrouter