import mongoose from "mongoose";
 
const BoardSchema = mongoose.Schema({
  title: {
     type: String, 
     required: true 
    },
  userId: { 
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Signup' 
    },
  createdAt: { 
    type: Date, 
    default: Date.now 
  } 
})  
const BoardsSchema = mongoose.model('BoardSchema', BoardSchema);
export default BoardsSchema;    