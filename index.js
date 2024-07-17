import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv  from 'dotenv'
import cookieparser from 'cookie-parser'
import itemRoutes from './Routers/itemRoutes.js'
import authRouter from './Routers/Auth.js'
import adminRouter from './Routers/Admin.js'
import DynamicRouting from './Routers/DynamicRouting.js'
import cors from 'cors';

const app = express()

dotenv.config()
app.use(cors(
  {
  credentials : true,
  origin:"http://localhost:3000"  
}
)); 
app.use(express.json())
app.use(cookieparser())
app.use(bodyParser.json())
app.use('/items',itemRoutes)
app.use('/auth',authRouter)
app.use('/admin',adminRouter)
app.use('/pages',DynamicRouting)


const port = process.env.PORT 


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log("Connected to DB");
      app.listen(port, () => {
      console.log(`Listening on PORT ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", {mesage : error});
  });

