import{mongoose} from 'mongoose'

const itemSchema = new mongoose.Schema({
    description :{
        type: String,
        required :true
    } 
}) 

const Items = mongoose.model('Items',itemSchema)
export default Items