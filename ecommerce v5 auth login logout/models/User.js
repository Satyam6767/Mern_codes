const mongoose = require('mongoose'); //object
const passportLocalMongoose = require('passport-local-mongoose');

// schema
const userSchema = new mongoose.Schema({
   email:{
    type:String,
    trim:true,
    required: true
   },
    gender:{
        type:String,
        trim:true,
        required: true
    }
    
} )

// model/collection -> JS class -> objects/document
//model -> sigular & capital letter

userSchema.plugin(passportLocalMongoose);


let User =  mongoose.model('User' , userSchema);

module.exports = User;