const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const LinkedInSchema = new mongoose.Schema({
  linkedInId: {
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

const NewLinkedIn = new mongoose.model(
  "officialLinkedIn",
  LinkedInSchema
);
module.exports = NewLinkedIn;