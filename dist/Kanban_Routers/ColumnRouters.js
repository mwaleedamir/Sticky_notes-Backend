import express from 'express';
import { GetColumn, CreateColumn, UpdateColumn, DeleteColumn, GetColumns } from '../Kanban_Controllers/ColumnControllers.js';
const ColumnRouter = express.Router();
ColumnRouter.post('/columns', CreateColumn);
ColumnRouter.get('/columns/:id', GetColumn);
ColumnRouter.get('/columns', GetColumns);
ColumnRouter.put('/columns/:id', UpdateColumn);
ColumnRouter.delete('/columns/:id', DeleteColumn);
export default ColumnRouter;