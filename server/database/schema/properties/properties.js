const express = require("express");
const mongoose = require("mongoose");

const { buffer } = require("stream/consumers");

const NewPropertySchema = new mongoose.Schema({
  ownerName: {
    type: String,
  },

  email: {
    type: String,
  },
  phoneNo: {
    type: Number,
  },
  propertyListedBy: {
    type: String,
  },
  userType: {
    type: String,
    //sell, rent, lease, pg
  },
  commercialPropertyType: {
    type: String,
  },
  propertySubType1: {
    type: String,
  },
  propertySubType2: {
    type: String,
  },
  constructionStatus: {
    type: String,
  },
  status: {
    type: String,
  },
  amenities: [],
  total_floors: {
    type: Number,
  },
  Property_on_floor: {
    type: Number,
  },
  rent_price: {
    type: Number,
  },
  duration_of_rent_aggrement: {
    type: Number,
  },
  rent_security_deposit: {
    type: Number,
  },

  rent_months_of_notice: {
    type: Number,
  },
  lease_price: {
    type: Number,
  },
  duration_of_lease_aggrement: {
    type: Number,
  },
  lease_security_deposit: {
    type: Number,
  },
  lease_months_of_notice: {
    type: Number,
  },
  carpet_total_area: {
    type: Number,
  },
  property_name: {
    type: String,
  },
  title_text: {
    type: String,
  },
  meta_keyword: {
    type: String,
  },
  meta_description: {
    type: String,
  },
  super_built_up_area: {
    type: Number,
  },
  built_up_area: {
    type: Number,
  },
  area: {
    type: Number,
  },
  price: {
    type: Number,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isFurnished: {
    type: String,
  },
  reserved_parking: {
    type: String,
  },
  servent_accomodation: {
    type: String,
  },
  rera_approval: {
    type: String,
  },
  reg: {
    type: String,
  },
  posession_date: {
    type: String,
  },
  usp: {
    type: String,
  },
  direction_facing: {
    type: String,
  },
  usp: {
    type: String,
  },
  usp: {
    type: String,
  },
  amenities: [String],
  age_of_property: {
    type: Number,
  },
  available_from: {
    type: Date,
  },
  sellingStatus: {
    type: String,
    default: "Not Sold Yet",
  },
  maxOfferedPrice: {
    type: Number,
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
  property_specicification: {
    type: String,
    // require : true
  },
  nearby_Keypoints: {
    type: String,
    // require : true
  },
  bhkNumber: {
    type: String,
    // require : true
  },
  name_nearest_metro_station: {
    type: String,
    // require : true
  },
  distance_nearest_metro_station: {
    type: Number,
    // require : true
  },
  name_nearest_railway_station: {
    type: String,
    // require : true
  },
  distance_nearest_railway_station: {
    type: Number,
    // require : true
  },
  name_nearest_bus_stop: {
    type: String,
    // require : true
  },
  distance_nearest_bus_stop: {
    type: Number,
    // require : true
  },
  propertyCity: String,
  propertyLocality: {
    type: String,
  },
  propertySubLocality: {
    type: String,
  },
  property_lane_address: {
    type: String,
  },
  propertySociety_Apartment_HouseNo: {
    type: String,
  },
  propertyImages: [{
    data: String,
    contentType: String,
  }],
  floorPlanImages: [{
    data: String,
    contentType: String,
  }],
  dateOfFormSubmission: {
    type: String,
  },
});

const NewPropertyRegistration = new mongoose.model(
  "Property_Details",
  NewPropertySchema
);
module.exports = NewPropertyRegistration;
