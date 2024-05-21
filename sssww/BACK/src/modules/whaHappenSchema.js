
import mongoose from "mongoose";
import User from "./userSchema.js"
import { UserSchema } from "./userSchema.js";
const whaHappenSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now,
  },
  user: UserSchema,
  action:{
    type: String
  }
});

export default mongoose.model('whaHappen', whaHappenSchema);
