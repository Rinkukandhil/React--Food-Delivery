// Import the required modules
import mongoose from "mongoose";

// Define the schema for the student model
const FoodSchema = new mongoose.Schema({
  CatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  FoodName: {
    type: String,
    required: true,
  },
  FoodMob: {
    type: String,
    required: true,
  },
  FoodEmail: {
    type: String,
    required: true,
  },
  FoodExp: {
    type: String,
    required: true,
  },
  FoodGender: {
    type: String,
    enum: ["Male", "Female", "TGender"],
    default: "Male",
  },
  FoodDOB: {
    type: String,
  },
  FoodAddress: {
    type: String,
  },
  FoodCity: {
    type: String,
  },
  FoodPhoto: {
    type: String,
  },
  FoodFees: {
    type: String,
  },
  FoodFeesDur: {
    type: String,
  },
  FoodStatus: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Food = mongoose.model("Food", FoodSchema);

export default Food;
