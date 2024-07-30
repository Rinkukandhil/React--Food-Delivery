import FoodBookingModel from "../models/FoodBookingModel.js";

const FoodBookingRegister = async (req, res) => {
  try {
    const newRecord = new FoodBookingModel(req.body);
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
const FoodBookingDisplayAllAdmin = async (req, res) => {
  try {
    const allRecord = await FoodBookingModel.find({});
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

const FoodBookingDisplay = async (req, res) => {
  try {
    const allRecord = await FoodBookingModel.find({ BookingStatus: true });
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

//incomplete
const FoodBookingDisplayUser = async (req, res) => {
  try {
    const allRecord = await FoodBookingModel.find({ BookingStatus: true });
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

const FoodBookingDisplayDeleted = async (req, res) => {
  try {
    const allRecord = await FoodBookingModel.find({ BookingStatus: false });
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
const FoodBookingDisplayByUserID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await FoodBookingModel.find({ UserId: id });
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

const FoodBookingDisplayByFoodID = async (req, res) => {
  try {
    const { id } = req.params;
    const Food = await FoodBookingModel.find({ FoodId: id });
    return res
      .status(200)
      .send({ status: true, message: "Display Record", Food });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display Record not working",
      err,
    });
  }
};

// Accessed from Admin side - TOBE UPDATED
const FoodBookingSearchByName = async (req, res) => {
  try {
    // const getRecord = await FoodBookingModel.find({
    //   FoodName: req.params.name,
    // });
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

// Accessed from Admin side     //   Soft Delete   or  Update Status
const FoodBookingDeleteByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await FoodBookingModel.findByIdAndDelete(req.params.id);
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
const FoodBookingUpdateByUser = async (req, res) => {
  try {
    const data = await FoodBookingModel.findByIdAndUpdate(
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
  FoodBookingRegister,
  FoodBookingDisplayAllAdmin,
  FoodBookingDisplay,
  FoodBookingDisplayUser,
  FoodBookingDisplayDeleted,
  FoodBookingSearchByName,
  FoodBookingUpdateByUser,
  FoodBookingDeleteByUser,

  // FoodBookingDisplayByUserID,
  // FoodBookingDisplayByFoodID,
};

// FoodBookingDisplay
//     FoodBookingDisplayAllAdmin
//     FoodBookingDisplayMy
//     FoodBookingDisplayUser

// 1    100, 101, 105
// 2    102, 103, 101, 106
// 3    101, 103, 107, 100, 105, 105

// 100 - 1, 3
// 101 - 1, 2, 3
// 102 - 2
// 103 - 2, 3
// 104 -
// 105 - 1, 3, 3
// 106 - 2
// 107 - 3
