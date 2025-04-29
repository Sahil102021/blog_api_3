let USER = require("../model/user");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

exports.Sequar = async function (req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      throw new Error("please provide token ");
    }
    let tokenVerify = await jwt.verify(token, "ADMIN-TEST");
    if (!tokenVerify) {
      throw new Error("invalide token");
    }
    req.user = tokenVerify._id;
    next();
  } catch (error) {
    res.status(200).json({
      status: " not a provide token .",
      message: error.message,
    });
  }
};

exports.Signup = async function (req, res) {
  try {
    let { name, contact, email, password } = req.body;
    if (!name || !contact || !email || !password) {
      throw new Error("Please provide all detail ");
    }
    let bcryptPassword = bcrypt.hashSync(password, 10);
    let checkeEmail = await USER.findOne({ email: email });
    if (checkeEmail) {
      throw new Error("already Email in data Base");
    }
    let copyData = await USER.create({ ...req.body, password: bcryptPassword });
    let token = jwt.sign({ _id: userData._id }, "ADMIN-TEST");

    console.log(" /n token : ", token);
    console.log(copyData);

    res.status(200).json({
      data: copyData,
      massage: "successfully create data",
      token,
    });
  } catch (error) {
    res.status(404).json({
      status: "not create data fail",
      message: error.message,
    });
  }
};

exports.login = async function (req, res) {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      throw new Error(" please provide email and pssowrd ");
    }
    let userData = await USER.findOne({ email: email });
    console.log(userData);
    if (!userData) {
      throw new Error("please provid correct email and password . ");
    }
    let CorrectPassword = bcrypt.compareSync(password, userData.password);
    if (!CorrectPassword) {
      throw new Error(" please provide correct password . ");
    }
    let token = jwt.sign({ _id: userData._id }, "ADMIN-TEST");
    res.status(200).json({
      data: userData,
      message: "successfully login ",
      token,
    });
  } catch (error) {
    res.status(404).json({
      status: "not successfully login",
      message: error.message,
    });
  }
};
