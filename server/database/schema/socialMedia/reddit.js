const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const RedditSchema = new mongoose.Schema({
  redditId: {
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

const NewReddit = new mongoose.model(
  "officialReddit",
  RedditSchema
);
module.exports = NewReddit;