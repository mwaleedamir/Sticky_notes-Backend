import{mongoose} from 'mongoose'

const itemSchema = new mongoose.Schema({    
  descriptionName :{
    type: String,
  },
   
  userId: {
    type :mongoose.Schema.Types.ObjectId,
    ref: 'Signup'
  },
  
  items: [{ description: String }]
  
},{timestamps : true}) 

const Item = mongoose.model('Items',itemSchema)
export default Item