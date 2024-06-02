const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const FeedbackSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  venue: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  contentImage: {
    data: String,
    contentType: String,
  },
  contentDescription: {
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
  status: {
    type: String,
  },

  //    postDate: {
  //     type: String,
  //   },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewFeedback = new mongoose.model("Events", FeedbackSchema);
module.exports = NewFeedback;
