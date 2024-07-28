import {CreateBoardSchema,GetBoardSchema,GetBoardSchemaById,EditBoardSchema,DeleteBoardSchema} from '../Kanban_Controllers/BoardController.js'
import express from 'express'

const router = express.Router()

router.post('/boards', CreateBoardSchema)
router.get('/boards', GetBoardSchema)
router.get('/boards:id', GetBoardSchemaById)
router.put('/boards:id', EditBoardSchema)
router.delete('/boards:id', DeleteBoardSchema)


export default router 