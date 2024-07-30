import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  UserMob: {
    type: Number,
    required: true,
  },
  UserEmail: {
    type: String,
    required: true,
  },
  UserPassword: {
    type: String,
    required: true,
  },
  UserStatus: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
