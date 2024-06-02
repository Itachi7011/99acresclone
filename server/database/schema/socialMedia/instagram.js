const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const InstagramSchema = new mongoose.Schema({
  instagramId: {
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

const NewInstagram = new mongoose.model(
  "officialInstagram",
  InstagramSchema
);
module.exports = NewInstagram;
