let BOOKS = require("../model/book");

exports.Createbook = async function (req, res, next) {
  try {
    let CreateBooks = (await BOOKS.create(req.body));
    res.status(201).json({
      status: "success",
      message: "Book Create ",
      data: CreateBooks,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message:  error.message,
    });
  }
};

exports.Findbook = async function (req, res, next) {
  try {
    let FindBooks = await BOOKS.find();
    if (!FindBooks) {
      throw new Error("not found book");
    }
    res.status(201).json({
      status: "success",
      message: "Book Find ",
      data: FindBooks,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.FindOnebook = async function (req, res, next) {
  try {
    let FindOneBook = await BOOKS.findById(req.params.id);
    if (!FindOneBook) {
      throw new Error("not found book");
    }
    res.status(201).json({
      status: "success",
      message: "Book Find ",
      data: FindOneBook,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updatebook = async function (req, res, next) {
  try {
    let UpdateBooks = await BOOKS.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      message: "Book update ",
      data: UpdateBooks,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.deletebook = async function (req, res, next) {
  try {
    let DeleteBooks = await BOOKS.findByIdAndDelete(req.params.id);
    if (!DeleteBooks) {
      throw new Error("not found book");
    }
    res.status(201).json({
      status: "success",
      message: "Book Delete",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
