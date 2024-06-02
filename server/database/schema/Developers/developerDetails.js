const express = require("express")
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");

const NewDeveloperRegistrationSchema = new mongoose.Schema({

    name: {
       type: String
       // ,
       // require : true
    },
    email: {
       type: String
       // ,
       // require : true
    },
    userType:{
      type:String,
      default:"developer"
    },
    phoneNo: {
       type: Number
       // ,
       // require : true
 
    },
    state: {
       type: String
       // ,
       // require : true
    },
    district: {
       type: String
       // ,
       // require : true
    },
    fullAddress: {
       type: String
       // ,
       // require : true
    },
    dateOfFormSubmission: {
       type: String
 
    },
    dateOfEmailValidation: {
       type: String
 
    },
    emailVerification:{
      type:Boolean,
      default:false
    },
    otp:{
      type:Number
    },
    isBlocked:{
      type:Boolean,
      default:false
    },
    password: {
       type: String
       // ,
       // require : true
    },
    cpassword: {
       type: String,
       require: true
    },
    tokens: {
       type: String
    }
 
 })
 
 
 
 NewDeveloperRegistrationSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
       this.password = await bcrypt.hash(this.password, 10);
 
    }
    next();
 })
 
 
 
 
 
 
 NewDeveloperRegistrationSchema.methods.generateAuthToken = async function () {
    try {
       let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "2592000000" })
       this.tokens = token1;
       await this.save();
       return token1;
    } catch (err) {
       console.log(err);
    }
 }
 
 
 
 
 const NewDeveloperRegistration = new mongoose.model("Developers_Details", NewDeveloperRegistrationSchema);
 module.exports = NewDeveloperRegistration;