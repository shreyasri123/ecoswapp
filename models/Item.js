// models/Item.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  location: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
