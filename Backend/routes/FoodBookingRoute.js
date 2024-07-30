import express from "express";
import FoodBookingController from "../controllers/FoodBookingController.js";
import Token from "../middleware/Middleware.js";

// REST Object
const router = express.Router();

// Private
router.post(
  "/register",
  Token.verifyTokenUser,
  FoodBookingController.FoodBookingRegister
);
router.get(
  "/displayalladmin",
  Token.verifyTokenAdmin,
  FoodBookingController.FoodBookingDisplayAllAdmin
);
router.get(
  "/display",
  Token.verifyTokenAdmin,
  FoodBookingController.FoodBookingDisplay
);
router.get(
  "/displaydeleted",
  Token.verifyTokenAdmin,
  FoodBookingController.FoodBookingDisplayDeleted
);
router.get(
  "/userdisplay",
  Token.verifyTokenUser,
  FoodBookingController.FoodBookingDisplayUser
);
router.get(
  "/searchbyname/:name",
  // Token.verifyTokenAdmin,
  FoodBookingController.FoodBookingSearchByName
);
router.delete(
  "/delete/:id",
  Token.verifyTokenUser,
  FoodBookingController.FoodBookingDeleteByUser
);
router.put(
  "/update/:id",
  Token.verifyTokenUser,
  FoodBookingController.FoodBookingUpdateByUser
);

export default router;
