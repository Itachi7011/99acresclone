const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const SocialMediaSchema = new mongoose.Schema({
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  twitter: {
    type: String,
  },
  reddit: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewSocialMedia = new mongoose.model(
  "Social_Media_Details",
  SocialMediaSchema
);
module.exports = NewSocialMedia;
