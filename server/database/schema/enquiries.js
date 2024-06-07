const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  projectId: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewEnquiry = new mongoose.model(
  "Enquiries",
  EnquirySchema
);
module.exports = NewEnquiry;
