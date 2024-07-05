import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv  from 'dotenv'
import itemRoutes from './Routers/itemRoutes.js'
import cors from 'cors';

const app = express()

dotenv.config()

app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use('/',itemRoutes)
const port = process.env.PORT 


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log("Connected to DB");
      app.listen(port, () => {
      console.log(`Listening on PORT ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

