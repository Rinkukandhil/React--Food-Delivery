import CatModel from "../models/CatModel.js";
import { v2 as cloudinary } from "cloudinary";
const CatRegister = async (req, res) => {
  try {
    cloudinary.config({
      cloud_name: "dt2ofhwuf",
      api_key: "539336632218464",
      api_secret: "6lPY2Xam7bPtl7rmPAWL1jGlXHg",
    });
    cloudinary.uploader.upload(
      req.files.CatIcon.tempFilePath,
      async (error, result) => {
        console.log("RESULT: ", result.url);
        const newCat = new CatModel({
          CatName: req.body.CatName,
          CatIcon: result.url,
          CatDesc: req.body.CatDesc,
        });
        await newCat.save();
        return res
          .status(201)
          .send({ status: true, message: "New Category Registered" });
      }
    );
    /////////////////
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: New Category Not Registered",
      err,
    });
  }
};

const CatDisplay = async (req, res) => {
  try {
    const allCat = await CatModel.find({});
    return res
      .status(200)
      .send({ status: true, message: "Display All Categories", allCat });
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Error: Display All Categories not working",
      err,
    });
  }
};

const CatSearchByID = async (req, res) => {
  try {
    const { id } = req.params;
    const catData = await CatModel.find({ _id: id });
    if (catData) {
      return res
        .status(200)
        .send({ status: true, message: "Cat Data Found", catData });
    } else {
      return res
        .status(200)
        .send({ status: true, message: "Cat Data Not Found" });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: "Error: Cat Data Not Found", err });
  }
};

const CatSearchByName = async (req, res) => {
  try {
    const { name } = req.params;
    const getCat = await CatModel.find({ CatName: name });
    if (getCat) {
      return res
        .status(200)
        .send({ status: true, message: "Record Found", getCat });
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

const CatDeleteByID = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await CatModel.findByIdAndDelete({ _id: id });
    if (cat) {
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

const CatUpdateByID = async (req, res) => {
  try {
    const cat = await CatModel.findByIdAndUpdate(req.params.id, req.body);
    if (cat) {
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
  CatRegister,
  CatDisplay,
  CatSearchByID,
  CatSearchByName,
  CatUpdateByID,
  CatDeleteByID,
};
