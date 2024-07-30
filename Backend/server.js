// import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import connectToMongoDB from "./config/connectDB.js";
import dotenv from "dotenv";

//import AdminRoute from "./routes/AdminRoute.js";
import CatRoute from "./routes/CatRoute.js";
import ContactRoute from "./routes/ContactRoute.js";
//import ExpertBookingRoute from "./routes/ExpertBookingRoute.js";
//import ExpertRoute from "./routes/ExpertRoute.js";
// import UFeedbackRoute from "./routes/UFeedbackRoute.js";
// import UserProfileRoute from "./routes/UserProfileRoute.js";
import UserRoute from "./routes/UserRoute.js";
import multer from "multer";

import fileUpload from "express-fileupload";
let upload = multer();

// REST Object
const app = express();

// PORT
const port = 4000;

// Database connect
connectToMongoDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//app.use("/api/v1/admin", AdminRoute);
app.use("/api/v1/cat", CatRoute);
app.use("/api/v1/contact", ContactRoute);
//app.use("/api/v1/expertbooking", ExpertBookingRoute);
//app.use("/api/v1/expert", ExpertRoute);
// app.use("/api/v1/ufeedback", UFeedbackRoute);
// app.use("/api/v1/userprofile", UserProfileRoute);
app.use("/api/v1/user", UserRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
