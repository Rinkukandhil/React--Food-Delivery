import mongoose from "mongoose";
const FoodBookingSchema = new mongoose.Schema({
  FoodId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  UserId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  BookingDate: {
    type: String,
    required: true,
  },
  BookingTime: {
    type: String,
    required: true,
  },
  BookingStatus: {
    type: Boolean,
    default: true,
  },
});

const FoodBooking = mongoose.model("FoodBooking", FoodBookingSchema);

export default FoodBooking;
