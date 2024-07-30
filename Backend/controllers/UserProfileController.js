import UserProfileModel from "../models/UserProfileModel.js";

const UserProfileRegister = async (req, res) => {
  try {
    const newRecord = new UserProfileModel(req.body);
    await newRecord.save();
    return res.status(201).send({ status: true, message: "New Data Inserted" });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: New Data Not Inserted",
      err,
    });
  }
};

// Display All Users By Admin
const UserProfileDisplayAll = async (req, res) => {
  try {
    const allRecord = await UserProfileModel.find({});
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
const UserProfileDisplayByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserProfileModel.find({ _id: id });
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

// Accessed from Admin side
const UserProfileSearchByName = async (req, res) => {
  try {
    // const { name } = req.params;
    // const getRecord = await UserProfileModel.find({ UserName: name }); // changes are req.
    // if (getRecord) {
    //   return res
    //     .status(200)
    //     .send({ status: true, message: "Record Found", getRecord });
    // } else {
    //   return res
    //     .status(200)
    //     .send({ status: true, message: "Record Not Found" });
    // }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Error: API Not Working..", err });
  }
};

// Accessed from Admin side     //   Soft Delete   or Update Status
const UserProfileDeleteByIDByAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserProfileModel.findByIdAndUpdate(req.params.id, {
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
const UserProfileDeleteByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserProfileModel.findByIdAndDelete({ _id: id });
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
const UserProfileUpdateByID = async (req, res) => {
  try {
    const data = await UserProfileModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
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

export default {
  UserProfileRegister,
  UserProfileDisplayAll,
  UserProfileDisplayByID,
  UserProfileSearchByName,
  UserProfileUpdateByID,
  UserProfileDeleteByID,
  UserProfileDeleteByIDByAdmin,
};
