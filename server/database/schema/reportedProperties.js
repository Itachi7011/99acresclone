const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const ReportedPropertySchema = new mongoose.Schema({
  PropertyId: {
    type: String,
  },
  property_name : {
    type: String,
  },
  reportDetails: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewReportedProperty = new mongoose.model(
  "Reported_Properties",
  ReportedPropertySchema
);
module.exports = NewReportedProperty;
