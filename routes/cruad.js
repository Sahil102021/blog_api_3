var express = require('express');
var router = express.Router();
let userProfileController = require("../controller/cruad");
let userController = require('../controller/user');

router.post("/create",userController.Sequar,userProfileController.Create );
router.get("/read",userController.Sequar,userProfileController.ReadAllData );
router.delete("/delete/:id",userController.Sequar,userProfileController.Delete );
router.patch("/update/:id",userController.Sequar,userProfileController.Update );


module.exports = router;