let PUBLISHER = require("../model/publisher");



exports.Createpulisher = async function (req, res, next) {
  try {
    let createpulisher = await PUBLISHER.create(req.body);
    res.status(201).json({
      status: "success",
      message: "pulisher Create",
      data: createpulisher,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};


exports.Findpublisher = async function (req, res, next) {
  try {
    let findpublisher = await PUBLISHER.find().populate("books");
    console.log(findpublisher);
    res.status(201).json({
      status: "success",
      message: "publisher Find ",
      data: findpublisher,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};


exports.FindOnepublisher = async function (req, res, next) {
  try {
    let findOnepublisher = await PUBLISHER.findById(req.params.id);
    if (!findOnepublisher) {
      throw new Error("not found PUBLISHER");
    }
    res.status(201).json({
      status: "success",
      message: "publisher Find ",
      data: findOnepublisher,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};


exports.updatepublisher = async function (req, res, next) {
  try {
    let Updatepublisher = await PUBLISHER.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(201).json({
      status: "success",
      message: "publisher update ",
      data: Updatepublisher,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message ,
    });
  }
};


exports.deletepublisher = async function (req, res, next) {
  try {
    let Deletepublisher = await PUBLISHER.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      message: "publisher Delete",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message ,
    });
  }
};
