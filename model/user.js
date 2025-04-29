let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const userSchema = new  Schema({
    name : {
        type : String,
    } , 
    contact : {
        type : String ,
    }, 
    email : {
        type : String ,
    },
    password : {
        type : String ,
    }
});

let USER = mongoose.model('userData' ,userSchema );
module.exports = USER;