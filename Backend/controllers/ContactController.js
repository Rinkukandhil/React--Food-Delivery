import ContactModel from "../models/ContactModel.js";

const ContactRegister = async (req, res) => {
  try {
    const newContact = new ContactModel(req.body);
    await newContact.save();
    return res.status(201).send({ status: true, message: "New Data Inserted" });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: New Data Not Inserted",
      err,
    });
  }
};

const ContactDisplay = async (req, res) => {
  try {
    console.log("TEST");
    const allContact = await ContactModel.find({ ContactStatus: true });
    console.log(allContact);
    return res
      .status(200)
      .send({ status: true, message: "Display All Records", allContact });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};

const ContactDisplayAll = async (req, res) => {
  try {
    const allContact = await ContactModel.find({});
    return res
      .status(200)
      .send({ status: true, message: "Display All Records", allContact });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};
const ContactDisplayDeleted = async (req, res) => {
  try {
    const allContact = await ContactModel.find({ ContactStatus: false });
    return res
      .status(200)
      .send({ status: true, message: "Display All Records", allContact });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Records not working",
      err,
    });
  }
};

const ContactSearchByName = async (req, res) => {
  try {
    const { name } = req.params;
    const getContact = await ContactModel.find({ ContactName: name });
    if (getContact) {
      return res
        .status(200)
        .send({ status: true, message: "Record Found", getContact });
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

const ContactDeleteByID = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await ContactModel.findByIdAndUpdate(req.params.id, {
      ContactStatus: false,
    });
    if (contact) {
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

// Useless for now
const ContactUpdateByID = async (req, res) => {
  try {
    const contact = await ContactModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (contact) {
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
  ContactRegister,
  ContactDisplayAll,
  ContactDisplay,
  ContactDisplayDeleted,
  ContactSearchByName,
  ContactUpdateByID,
  ContactDeleteByID,
};
