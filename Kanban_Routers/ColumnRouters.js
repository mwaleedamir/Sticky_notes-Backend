import express from 'express';
import { GetColumn,CreateColumn,UpdateColumn,DeleteColumn,PopulateColumns,GetColumns} from '../Kanban_Controllers/ColumnControllers.js';
import { Authenticate } from '../middleware/verifyToken.js';

const ColumnRouter = express.Router();

ColumnRouter.post('/columns', CreateColumn);
ColumnRouter.get('/columns/:id',  GetColumn);
ColumnRouter.post('/columns/populate',  PopulateColumns);
ColumnRouter.get('/columns',  GetColumns);
ColumnRouter.put('/columns/:id', Authenticate, UpdateColumn);
ColumnRouter.delete('/columns/:id', Authenticate, DeleteColumn);

export default ColumnRouter;