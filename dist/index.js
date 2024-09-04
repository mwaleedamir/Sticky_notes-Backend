import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';
import itemRoutes from './Kanban_Routers/itemRoutes.js';
import authRouter from './Auth_Routers/AuthRoutes.js';
import adminRouter from './Auth_Routers/AdminRoutes.js';
import boardRoutes from './Kanban_Routers/boardRoutes.js';
import ColumnRouter from './Kanban_Routers/ColumnRouters.js';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/board', boardRoutes);
app.use('/board', ColumnRouter);
app.use('/board', itemRoutes);
const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to DB");
  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  });
}).catch(error => {
  console.error("Error connecting to DB:", {
    mesage: error
  });
});