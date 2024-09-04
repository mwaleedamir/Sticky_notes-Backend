import express from 'express'
import { CreateItem ,UpdateItems,DeleteItems, GetItems, GetItemsById, updateMove} from '../Kanban_Controllers/itemControllers.js'
 
const Itemrouter = express.Router()

Itemrouter.post('/items',CreateItem)  
Itemrouter.get('/items',GetItems)
Itemrouter.get('/items/:id',GetItemsById)
Itemrouter.put('/items/:id',UpdateItems)
Itemrouter.put('/move/',updateMove)
Itemrouter.delete('/items/:id',DeleteItems) 
 
export default Itemrouter