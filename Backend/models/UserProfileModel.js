import mongoose from "mongoose";
const UProfileSchema = new mongoose.Schema({
  // UserId: {},
  UserGender: {
    type: String,
    enum: ["Male", "Female", "TGender"],
    default: "Male",
  },
  UserDOB: {
    type: Date,
  },
  UserAddress: {
    type: String,
  },
  UserCity: {
    type: String,
  },
  UserPhoto: {
    type: String,
  },
});

const UProfile = mongoose.model("UProfile", UProfileSchema);

export default UProfile;
