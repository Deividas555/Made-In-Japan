
import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  }
});

export default mongoose.model('User', UserSchema);
