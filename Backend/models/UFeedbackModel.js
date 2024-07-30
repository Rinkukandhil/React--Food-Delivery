import mongoose from "mongoose";
const UFeedbackSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  UFeedbackRating: {
    type: Number,
    required: true,
  },
  UFeedbackMessage: {
    type: String,
  },
  UFeedbackStatus: {
    type: Boolean,
    default: true,
  },
});

const UFeedback = mongoose.model("UFeedback", UFeedbackSchema);

export default UFeedback;
