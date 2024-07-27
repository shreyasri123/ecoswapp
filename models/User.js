// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
