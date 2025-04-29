var express = require("express");
var router = express.Router();
let Contbooks = require("../controller/book");


/* GET home page. */
router.post("/create", Contbooks.Createbook);
router.get("/find", Contbooks.Findbook);
router.get("/find/:id", Contbooks.FindOnebook);
router.patch("/update/:id", Contbooks.updatebook);
router.delete("/delete/:id", Contbooks.deletebook);

module.exports = router;
