const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const TwitterSchema = new mongoose.Schema({
  twitterId: {
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

const NewTwitter = new mongoose.model(
  "officialTwitter",
  TwitterSchema
);
module.exports = NewTwitter;
