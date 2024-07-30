import express from "express";
import FoodController from "../controllers/FoodController.js";
import Token from "../middleware/Middleware.js";
// REST Object
const router = express.Router();

// public route
router.get("/displaypop", FoodController.FoodDisplayPop);

// private routes
router.post(
  "/register",
  // Token.verifyTokenAdmin,
  FoodController.FoodRegister
);
router.get(
  "/displayall",
  // Token.verifyTokenAdmin,
  FoodController.FoodDisplayAll
);
router.get(
  "/display",
  // Token.verifyTokenAdmin,
  FoodController.FoodDisplay
);
router.get("/display1", Token.verifyTokenUser, FoodController.FoodDisplay);
router.get(
  "/displaydeleted",
  Token.verifyTokenAdmin,
  FoodController.FoodDisplayDeleted
);
router.get(
  "/searchbyname/:name",
  Token.verifyTokenUser,
  FoodController.FoodSearchByName
);
router.delete(
  "/delete/:id",
  // Token.verifyTokenAdmin,
  FoodController.FoodDeleteByID
); // error
router.put(
  "/update/:id",
  Token.verifyTokenAdmin,
  FoodController.FoodUpdateByID
);

export default router;
