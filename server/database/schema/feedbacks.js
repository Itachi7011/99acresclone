const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const FeedbackSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  topic: {
    type: String,
  },
  feedbackDetail: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewFeedback = new mongoose.model(
  "Feedbacks",
  FeedbackSchema
);
module.exports = NewFeedback;
