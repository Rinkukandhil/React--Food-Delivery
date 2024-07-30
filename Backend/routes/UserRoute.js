import express from "express";
import UserController from "../controllers/UserController.js";
import jwt from "jsonwebtoken";
import Token from "../middleware/Middleware.js";

// REST Object
const router = express.Router();

// public routes
router.post("/register", UserController.UserRegister);
router.post("/userlogin", UserController.UserLogin); // provide token

// private routes
router.get("/displayall", Token.verifyTokenUser, UserController.UserDisplayAll);
router.get("/display", Token.verifyTokenUser, UserController.UserDisplay);

router.get("/display1", Token.verifyTokenUser, UserController.UserDisplay);
router.get(
  "/displaydeleted",
  Token.verifyTokenUser,
  UserController.UserDisplayDeleted
);

router.get(
  "/displaybyid/:id",
  Token.verifyTokenUser,
  UserController.UserDisplayByID
);
router.get(
  "/searchbyname/:name",
  Token.verifyTokenUser,
  UserController.UserSearchByName
);
router.delete(
  "/deletebyadmin/:id",
  Token.verifyTokenUser,
  UserController.UserDeleteByIDByAdmin
);
router.delete(
  "/delete/:id",
  Token.verifyTokenUser,
  UserController.UserDeleteByID
);
router.put("/update/:id", Token.verifyTokenUser, UserController.UserUpdateByID);

export default router;
