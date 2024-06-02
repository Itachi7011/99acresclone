const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const FeedbackSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  heading: {
    type: String,
  },

  description: {
    type: String,
  },
  youtubeURL: {
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
  image: {
    data: String,
    contentType: String,
  }, 
//    postDate: {
//     type: String,
//   },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewFeedback = new mongoose.model(
  "News",
  FeedbackSchema
);
module.exports = NewFeedback;
