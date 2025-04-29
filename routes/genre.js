var express = require('express');
let router = express.Router();
let Contgenres = require('../controller/genre')

/* GET home page. */
router.post('/create' , Contgenres.Creategenre)
router.get('/find' , Contgenres.Findgenre)
router.get('/find/:id' , Contgenres.FindOnegenre)
router.patch('/update/:id' , Contgenres.updategenre)
router.delete('/delete/:id' , Contgenres.deletegenre)


module.exports = router; 