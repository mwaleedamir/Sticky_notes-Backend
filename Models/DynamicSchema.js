import mongoose from "mongoose";

const DynamicPageSchema = mongoose.Schema({
  // path: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
})
const DynamicPage = mongoose.model('DynamicPage', DynamicPageSchema);
export default DynamicPage;