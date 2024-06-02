const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { buffer } = require("stream/consumers");

const NewCommercialprojectSchema = new mongoose.Schema({
  ownerName: {
    type: String,
  },

  email: {
    type: String,
  },
  phoneNo: {
    type: Number,
  },
  projectListedBy: {
    type: String,
  },
  userType: {
    type: String,
  },
  projectType: {
    type: String,
  },

  constructionTitle: String,
  constructionData: String,

  totalAmount: {
    type: String,
  },
  developerName: {
    type: String,
  },
  pricePlanDetails: {
    type: String,
  },
  floorPlanDetails: {
    type: String,
  },
  paymentPlanDetails: {
    type: String,
  },

  pricePlan: {
    data: String,
    contentType: String,
  },
  paymentPlan: {
    data: String,
    contentType: String,
  },
  amenities: [],
  bank_offers: [],
  total_floors: {
    type: String,
  },

  max_area: {
    type: String,
  },
  min_area: {
    type: String,
  },
  project_name: {
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
  total_area: {
    type: String,
  },
  youtube_URL: {
    type: String,
  },
  open_area: {
    type: String,
  },
  locationMap: {
    type: String,
  },
  masterPlan: {
    type: String,
  },
  area: {
    type: String,
  },
  max_price: {
    type: String,
  },
  min_price: {
    type: String,
  },
  price: {
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
  usp: [String],
  no_of_units: {
    type: String,
    type: String,
  },
  no_of_floor: {
    type: String,
  },
  no_of_tower: {
    type: String,
  },

  project_specification: {
    type: String,
    // require : true
  },
  bhkNumber: {
    type: String,
    // require : true
  },
  featureProject: {
    type: String,
    // require : true
  },
  projectCity: String,
  projectCountry: {
    type: String,
  },
  projectLocality: {
    type: String,
  },
  projectSubLocality: {
    type: String,
  },
  project_lane_address: {
    type: String,
  },
  contactUsDetails: {
    type: String,
  },

  logoImage: {
    data: String,
    contentType: String,
  },
  projectImage: {
    data: String,
    contentType: String,
  },
  floorPlanImage: {
    data: String,
    contentType: String,
  },
  pricePlanImage: {
    data: String,
    contentType: String,
  },
  paymentPlanImage: {
    data: String,
    contentType: String,
  },
  e_brochureImage: {
    data: String,
    contentType: String,
  },
  constructionUpdateImage: {
    data: String,
    contentType: String,
  },
  contactUsImage: {
    data: String,
    contentType: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewCommercialprojectRegistration = new mongoose.model(
  "Projects_Details",
  NewCommercialprojectSchema
);
module.exports = NewCommercialprojectRegistration;
