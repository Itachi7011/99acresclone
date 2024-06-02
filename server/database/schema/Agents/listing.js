const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

listingSchema = new mongoose.Schema({
  agentName: {
    type: String,
  },
  businessLogo: {
    type: String,
  },
  businessCategory: {
    type: String,
  },
  businessState: {
    type: String,
  },
  businessCity: {
    type: String,
  },
  businessLocation: {
    type: String,
  },
  aboutCompany: {
    type: String,
  },
  companyUrl: {
    type: String,
  },
  companyMailId: {
    type: String,
  },
  ContactPerson: {
    type: String,
  },
  businessCategory: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewListing = new mongoose.model(
  "Listing_Details",
  AgentServicesSchema
);
module.exports = NewListing;
