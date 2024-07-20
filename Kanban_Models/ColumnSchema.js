import mongoose from "mongoose"

const ColumnSchema = mongoose.Schema({
    columnName :{
        type : String,
        required : true
    },
    columnId :{
        type :Number,
        required : true
    },
    userId: {
        type :mongoose.Schema.Types.ObjectId,
        ref: 'Signup'
      },
      
},{timestamps :true})

const Column = mongoose.model('Column', ColumnSchema)
export default Column