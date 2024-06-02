const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const FacebookSchema = new mongoose.Schema({
  FacebookId: {
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

const NewFacebook = new mongoose.model(
  "officialFacebook",
  FacebookSchema
);
module.exports = NewFacebook;