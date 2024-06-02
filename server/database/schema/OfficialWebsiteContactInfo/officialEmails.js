const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const OfficialEmailSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  additionalComment: {
    type: String,
    //optional
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewOfficialEmails = new mongoose.model(
  "offical_company_emails",
  OfficialEmailSchema
);
module.exports = NewOfficialEmails;
