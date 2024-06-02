const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  logo: {
    data: String,
    contentType: String,
  },
  aboutDeveloper: {
    type: String,
  },
  metaTitle: {
    type: String,
  },
  metaKeyword: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewDeveloper = new mongoose.model("Developer_Details", FeedbackSchema);
module.exports = NewDeveloper;
