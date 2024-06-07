const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const FAQSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewFAQ = new mongoose.model(
  "FAQ",
  FAQSchema
);
module.exports = NewFAQ;
