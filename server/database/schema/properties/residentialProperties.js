const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");

const NewResidentialPropertySchema = new mongoose.Schema({
  ownerName: {
    type: String,
  },

  email: {
    type: String,
  },
  phoneNo: {
    type: Number,
  },
  actionType: {
    type: String,
    //sell, rent, lease, pg
  },
  userType: {
    type: String,
    //sell, rent, lease, pg
  },
  residentialPropertyType: {
    type: String,
    // office, rental, plot, land, storage, industry, hospitality, other
  },
  contructionStatus: {
    type: String,
    //Plain Land, Ready To Move, Ongoing Construction
  },
  total_floors: {
    type: Number,
  },
  Property_on_floor: {
    type: Number,
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  balconies: {
    type: Number,
  },
  carpet_total_area: {
    type: Number,
  },

  isFurnished: {
    type: String,
    //furnished, semi-furnished, un-furnished
  },
  reserved_parking: {
    type: String,
    //available, not-available
  },
  age_of_property: {
    type: Number,
  },
  available_from: {
    type: Date,
    //It will be date in input tag
  },
  sellingStatus: {
    type: String,
    default: "Not Sold Yet",
  },
  maxOfferedPrice: {
    type: Number,
  },
  willing_to_rent_out_to: {
    type: String,
    //Family, single-men, single-women
  },
  expected_selling_price: {
    type: Number,
  },
  expected_renting_price: {
    type: Number,
  },
  duration_of_aggrement: {
    type: Number,
  },
  security_deposit: {
    type: Number,
  },
  months_of_notice: {
    type: Number,
  },
  propertyCity: {
    type: String,
    // require : true
  },
  propertyLocality: {
    type: String,
    // ,
    // require : true
  },
  propertySubLocality: {
    type: String,
    // ,
    // require : true
  },
  propertySociety_Apartment_HouseNo: {
    type: String,
    // ,
    // require : true
  },
  dateOfFormSubmission: {
    type: String,
    // ,
    // require : true
  },
});

const NewResidentialPropertyRegistration = new mongoose.model(
  "Residential_Property_Details",
  NewResidentialPropertySchema
);
module.exports = NewResidentialPropertyRegistration;
