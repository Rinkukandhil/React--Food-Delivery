import express from "express";
import CatController from "../controllers/CatController.js";
import Token from "../middleware/Middleware.js";
// REST Object
const router = express.Router();

// Routes      or      API
// Public routes
router.get("/display", CatController.CatDisplay);
router.get("/searchbyname/:name", CatController.CatSearchByName);
router.get("/searchbyid/:id", CatController.CatSearchByID);

// private routes
router.get("/display1", Token.verifyTokenAdmin, CatController.CatDisplay);
router.get(
  "/searchbyname1/:name",
  Token.verifyTokenAdmin,
  CatController.CatSearchByName
);

router.get("/display2", Token.verifyTokenUser, CatController.CatDisplay);
router.get(
  "/searchbyname2/:name",
  Token.verifyTokenUser,
  CatController.CatSearchByName
);

router.post("/register", CatController.CatRegister);
router.delete("/delete/:id", CatController.CatDeleteByID);
router.put("/update/:id", CatController.CatUpdateByID);

export default router;
