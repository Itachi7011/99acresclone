const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

AgentServicesSchema = new mongoose.Schema({
  agentName: {
    type: String,
  },
  businessLogo: {
    type: String,
  },
  businessName: {
    type: String,
  },
  businessCategory: {
    type: String,
  },
  businessCountry: {
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
  experienceInField: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewServices = new mongoose.model("Services_Details", AgentServicesSchema);
module.exports = NewServices;
