import FoodModel from "../models/FoodModel.js";

const FoodRegister = async (req, res) => {
  try {
    const newRecord = new FoodModel(req.body);
    const result = await newRecord.save();
    console.log(result);
    return res.status(201).send({ status: true, message: "New Data Inserted" });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: New Data Not Inserted",
      err,
    });
  }
};

const FoodDisplayPop = async (req, res) => {
  try {
    // JOINS IN MYSQL
    // POPULATE IN MONGODB
    console.log("POP.......");
    const allRecord = await FoodModel.find({ FoodStatus: true }).populate(
      "Category"
    );
    console.log("DATA...", allRecord);
    return res
      .status(200)
      .send({ status: true, message: "Display All Records", allRecord });
  } catch (err) {
    console.log("ERR", err.message);
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};

const FoodDisplay = async (req, res) => {
  try {
    // JOINS IN MYSQL
    // POPULATE IN MONGODB
    const allRecord = await FoodModel.find({ FoodStatus: true });
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

const FoodDisplayAll = async (req, res) => {
  try {
    const allRecord = await FoodModel.find({});
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

const FoodDisplayDeleted = async (req, res) => {
  try {
    const allRecord = await FoodModel.find({ FoodStatus: false });
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

const FoodSearchByName = async (req, res) => {
  try {
    const { name } = req.params;
    const getRecord = await FoodModel.find({ FoodName: name });
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

const FoodDeleteByID = async (req, res) => {
  try {
    const data = await FoodModel.findByIdAndUpdate(req.params.id, {
      FoodStatus: false,
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

const FoodUpdateByID = async (req, res) => {
  try {
    const data = await FoodModel.findByIdAndUpdate(req.params.id, req.body);
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
  FoodRegister,
  FoodDisplayAll,
  FoodDisplay,
  FoodDisplayDeleted,
  FoodSearchByName,
  FoodUpdateByID,
  FoodDeleteByID,
  FoodDisplayPop,
};
