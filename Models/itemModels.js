import{mongoose} from 'mongoose'

const itemSchema = new mongoose.Schema({
    description :{
        type: String,
        required :true
    } 
}) 

const Item = mongoose.model('Items',itemSchema)
export default Item