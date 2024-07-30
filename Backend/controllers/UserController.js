import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserRegister = async (req, res) => {
  try {
    let { UserName, UserEmail, UserMob, UserPassword } = req.body;
    const saltKey = 8;
    bcrypt.hash(UserPassword, saltKey, async (err, hashPassword) => {
      if (err) {
        console.log(err);
      } else {
        const newRecord = new UserModel({
          UserName,
          UserEmail,
          UserMob,
          UserPassword: hashPassword,
        });
        console.log(newRecord);
        await newRecord.save();
        return res
          .status(201)
          .send({ status: true, message: "New Data Inserted", newRecord });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status: false,
      message: "Error: New Data Not Inserted",
      err,
    });
  }
};

const UserDisplayAll = async (req, res) => {
  try {
    const allRecord = await UserModel.find({});
    return res
      .status(200)
      .send({ status: true, message: "Display All Records", allRecord });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};

const UserDisplay = async (req, res) => {
  try {
    const allRecord = await UserModel.find({ UserStatus: true });
    return res
      .status(200)
      .send({ status: true, message: "Display All Records", allRecord });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};

const UserDisplayDeleted = async (req, res) => {
  try {
    const allRecord = await UserModel.find({ UserStatus: false });
    return res
      .status(200)
      .send({ status: true, message: "Display All Records", allRecord });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};

// Display User (OWN) By User
const UserDisplayByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.find({ _id: id });
    return res
      .status(200)
      .send({ status: true, message: "Display Record", user });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display Record not working",
      err,
    });
  }
};

// Accessed from User side
const UserSearchByName = async (req, res) => {
  try {
    const { name } = req.params;
    const getRecord = await UserModel.find({ UserName: name });
    if (getRecord) {
      return res
        .status(200)
        .send({ status: true, message: "Record Found", getRecord });
    } else {
      return res
        .status(200)
        .send({ status: true, message: "Record Not Found" });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Error: API Not Working..", err });
  }
};

// Accessed from Admin side     //   Soft Delete   or Update Status
const UserDeleteByIDByAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserModel.findByIdAndUpdate(req.params.id, {
      UserStatus: false,
    });
    if (data) {
      return res
        .status(200)
        .send({ status: true, message: "Record Deleted", id });
    } else {
      return res
        .status(200)
        .send({ status: true, message: "Record Not Found / Deleted", id });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Error: API Not Working", err });
  }
};

// Accessed from User side
const UserDeleteByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserModel.findByIdAndDelete({ _id: id });
    if (data) {
      return res
        .status(200)
        .send({ status: true, message: "Record Deleted", id });
    } else {
      return res
        .status(200)
        .send({ status: true, message: "Record Not Found / Deleted", id });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Error: API Not Working", err });
  }
};

// Accessed from User side
const UserUpdateByID = async (req, res) => {
  try {
    const data = await UserModel.findByIdAndUpdate(req.params.id, req.body);
    if (data) {
      return res.status(200).send({ status: true, message: "Record Updated" }); //admin:req.body
    } else {
      return res
        .status(200)
        .send({ status: true, message: "Record Not Found / Updated", id });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Error: API Not Working", err });
  }
};

const UserLogin = async (req, res) => {
  try {
    const { UserEmail, UserPassword } = req.body;
    const user = await UserModel.find({ UserEmail }); //add Status
    if (user.length > 0) {
      // if (UserPassword === user.UserPassword){}  // without hashing
      // bcrypt.compare(your current password, stored password);
      bcrypt.compare(UserPassword, user[0].UserPassword, (err, result) => {
        if (err) {
          return res.status(500).send({ status: false, message: "Error", err });
        } else {
          if (result) {
            const secretKey = "myjsonwebtokenkeyuser";
            // const userData = { UserEmail };
            // const userData = { UserEmail: UserEmail };
            const userData = {
              UserEmail: UserEmail,
              UserLoginTime: Date.now(),
            };
            jwt.sign(userData, secretKey, (err, token) => {
              if (err) {
                return res
                  .status(500)
                  .send({ status: false, message: "Error: ", err });
              } else {
                if (!token) {
                  return res.status(200).send({
                    status: true,
                    message: "Token Not Found...",
                  });
                } else {
                  return res
                    .status(200)
                    .send({ status: true, message: "Password Matched", token });
                }
              }
            });
          } else {
            return res.status(200).send({
              status: true,
              message: "Email ID or Password Not Found..",
            });
          }
        }
      });
    } else {
      return res
        .status(200)
        .send({ status: true, message: "Email ID or Password Not Found.." });
    }
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};

export default {
  UserRegister,
  UserDisplayAll,
  UserDisplay,
  UserDisplayDeleted,
  UserDisplayByID,
  UserSearchByName,
  UserUpdateByID,
  UserDeleteByID,
  UserDeleteByIDByAdmin,
  UserLogin,
};
