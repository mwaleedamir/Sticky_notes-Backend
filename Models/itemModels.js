import{mongoose} from 'mongoose'

const itemSchema = new mongoose.Schema({    
    descriptionName:{
        type: String,
        required :true
    },
    description :{
        type: String,
        required :true
    } 
   
}) 

const Item = mongoose.model('Items',itemSchema)
export default Item