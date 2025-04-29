const { status } = require("express/lib/response");
let USERPROFILE = require("../model/cruad");
const { token } = require("morgan");

exports.Create = async function (req, res) {
  try {
    let { name, contact, number, profielDate, user } = req.body;
    if (!name || !contact || !number || !profielDate) {
      throw new Error(
        "please provide name , contact , number , profileData , user"
      );
    }
    req.body.user = req.user;
    let profileUserData = await USERPROFILE.create(req.body);

    res.status(200).json({
      data: profileUserData,
      message: "successfully create data",
    });
  } catch (error) {
    res.status(404).json({
      status: "please ",
      message: error.message,
    });
  }
};

exports.ReadAllData = async function (req, res) {
  try {
    let copyData = await USERPROFILE.find({ user: req.user });

    res.status(200).json({
      data: copyData,
      message: "successfully read",
    });
  } catch (error) {
    res.status(404).json({
      status: "not successfully read  ",
      message: error.message,
    });
  }
};

exports.Delete = async function (req, res) {
  try {
    let id = req.params.id;
    console.log(id);
    let deleteData = await USERPROFILE.findByIdAndDelete({
      _id: id,
      user: req.user,
    });
    res.status(200).json({
      message: "successfully delete",
    });
  } catch (error) {
    res.status(404).json({
      status: "not successfully delete ",
      message: error.message,
    });
  }
};

exports.Update = async function (req, res) {
  try {
    let id = req.params.id;
    console.log(id);
    let copyData = await USERPROFILE.findByIdAndUpdate( { _id: id, user: req.user }, req.body, { new: true } );
    res.status(200).json({
      data: copyData,
      message: "successfully update",
    });
  } catch (error) {
    res.status(404).json({
      status: "not successfully update ",
      message: error.message,
    });
  }
};
