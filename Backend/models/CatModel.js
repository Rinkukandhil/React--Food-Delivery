// Import the required modules
import mongoose from "mongoose";

// Define the schema for the student model
const CatSchema = new mongoose.Schema({
  CatName: {
    type: String,
    required: true,
  },
  CatIcon: {
    type: String,
    // required: true,
  },
  CatDesc: {
    type: String,
  },
  CatStatus: {
    type: Boolean,
    default: true,
  },
});

const Category = mongoose.model("Category", CatSchema);

export default Category;
