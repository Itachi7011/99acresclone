const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

QuestionAnwserSchema = new mongoose.Schema({
  agentName: {
    type: String,
  },
  questionTitle: {
    type: String,
  },
  answers: [
    {
      answeredByName: {
        type: String,
      },
      answeredByEmail: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
  question_tags: [String],
  dateOfFormSubmission: {
    type: String,
  },
});

const NewBlog = new mongoose.model(
  "QuestionAnwers_Details",
  QuestionAnwserSchema
);
module.exports = NewBlog;
