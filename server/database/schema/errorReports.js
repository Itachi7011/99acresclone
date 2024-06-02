const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const ErrorReportSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  pageName: {
    type: String,
  },
  errorDetails: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewErrorReports = new mongoose.model(
  "Error_Reports",
  ErrorReportSchema
);
module.exports = NewErrorReports;
