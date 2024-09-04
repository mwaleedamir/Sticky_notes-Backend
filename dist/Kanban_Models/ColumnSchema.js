import mongoose from "mongoose";
const ColumnSchema = mongoose.Schema({
  columnName: {
    type: String,
    required: true
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BoardSchema'
  }
  // userId: {   
  //     type :mongoose.Schema.Types.ObjectId,   
  //     ref: 'Signup' 
  //   },  
}, {
  timestamps: true
});
const Column = mongoose.model('Column', ColumnSchema);
export default Column;