import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  topic: {
    type: String,
  },
  description: {
    type: String,
  },
  completion: {
    type: String
  },
  id:{
    type: Number,
  }
});

export default mongoose.model('noteSchema', noteSchema);
