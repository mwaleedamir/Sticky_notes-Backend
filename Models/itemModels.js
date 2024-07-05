import{mongoose} from 'mongoose'

const itemScheama = new mongoose.Schema({
    name: {
        type:String,
        required :true
    } ,
    des :{
        type: String,
        required :true
    } 
}) 

const Items = mongoose.model('Items',itemScheama)
export default Items