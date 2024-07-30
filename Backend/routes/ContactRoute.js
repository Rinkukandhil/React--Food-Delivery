import express from "express";
import ContactController from "../controllers/ContactController.js";
import Token from "../middleware/Middleware.js";
// REST Object
const router = express.Router();

// public route
router.post("/register", ContactController.ContactRegister);

// private route
router.get(
  "/displayall",
  Token.verifyTokenAdmin,
  ContactController.ContactDisplayAll
);
router.get(
  "/display",
  Token.verifyTokenAdmin,
  ContactController.ContactDisplay
);
router.get(
  "/displaydeleted",
  Token.verifyTokenAdmin,
  ContactController.ContactDisplayDeleted
);
router.get(
  "/searchbyname/:name",
  Token.verifyTokenAdmin,
  ContactController.ContactSearchByName
);
router.delete(
  "/delete/:id",
  Token.verifyTokenAdmin,
  ContactController.ContactDeleteByID
);
router.put(
  "/update:id",
  Token.verifyTokenAdmin,
  ContactController.ContactUpdateByID
);

export default router;
