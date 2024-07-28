import{mongoose} from 'mongoose'

const itemSchema = new mongoose.Schema({    
  descriptions :{
    type: String,
    required: true,
    trim: true,  
    maxLength: 200 
  },
   columnsId :{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Columns'
   }
  
},{timestamps : true}) 

const Items = mongoose.model('Items',itemSchema)
export default Items