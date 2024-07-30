import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
  ContactName: {
    type: String,
    required: true,
  },
  ContactMob: {
    type: Number,
    required: true,
  },
  ContactEmail: {
    type: String,
    required: true,
  },
  ContactTitle: {
    type: String,
    required: true,
    enum: ["Common", "Expert", "User", "LoginRegister"],
    default: "Common",
  },
  ContactDesc: {
    type: String,
    required: true,
  },
  ContactStatus: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
