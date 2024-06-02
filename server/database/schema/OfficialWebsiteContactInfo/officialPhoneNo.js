const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const OfficialPhoneNoSchema = new mongoose.Schema({
  phoneNo: {
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

const NewOfficialPhoneNo = new mongoose.model(
  "offical_company_phoneNo",
  OfficialPhoneNoSchema
);
module.exports = NewOfficialPhoneNo;
