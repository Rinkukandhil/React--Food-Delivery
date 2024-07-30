import UFeedbackModel from "../models/UFeedbackModel.js";

const UFeedbackRegister = async (req, res) => {
  try {
    const newRecord = new UFeedbackModel(req.body);
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

const UFeedbackDisplayAll = async (req, res) => {
  try {
    const allRecord = await UFeedbackModel.find({});
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

const UFeedbackDisplayTrue = async (req, res) => {
  try {
    const allRecord = await UFeedbackModel.find({ UFeedbackStatus: true });
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

const UFeedbackDisplayFalse = async (req, res) => {
  try {
    const allRecord = await UFeedbackModel.find({ UFeedbackStatus: false });
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

const UFeedbackSearchByRating = async (req, res) => {
  try {
    const { rating } = req.params;
    const getRecords = await UFeedbackModel.find({ UFeedbackRating: rating });
    if (getRecords) {
      return res
        .status(200)
        .send({ status: true, message: `Record(s) Found`, getRecords });
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

const UFeedbackSearchByID = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body; // Rejcted   / Accepted
    const temp = type === "Rejected" ? false : true;
    const getRecords = await UFeedbackModel.find({
      _id: id,
      UFeedbackStatus: temp,
    });
    if (getRecords) {
      return res
        .status(200)
        .send({ status: true, message: `Record(s) Found`, getRecords });
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

// Soft Delete   or   Update Status
const UFeedbackDeleteByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UFeedbackModel.findByIdAndUpdate(req.params.id, {
      UFeedbackStatus: false,
    });
    if (data) {
      return res
        .status(200)
        .send({ status: true, message: "Record Deleted / Updated", id });
    } else {
      return res.status(200).send({
        status: true,
        message: "Record Not Found / Deleted / Updated",
        id,
      });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Error: API Not Working", err });
  }
};

const UFeedbackUpdateByID = async (req, res) => {
  try {
    const data = await UFeedbackModel.findByIdAndUpdate(
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
  UFeedbackRegister,
  UFeedbackDisplayAll,
  UFeedbackDisplayTrue,
  UFeedbackDisplayFalse,
  UFeedbackSearchByRating,
  UFeedbackSearchByID,
  UFeedbackUpdateByID,
  UFeedbackDeleteByID,
};

// XYZ  ---  5             4    &    1
// User --->>  70  --->> 100   (Repeat)

// Total FeedBack---->> 100  -- >>> 90    or     10

// User -->  XYZ  -->>>   5     4   &    1
