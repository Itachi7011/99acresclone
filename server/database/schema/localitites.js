const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const FeedbackSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  location: {
    type: String,
  },
  sub_location :{
    type: String,
  },
  addedByUser: {
    type: String,
  },
  addedWithProperty: {
    type: String,
  },
  isValid: {
    type: Boolean,
    default: false,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewLocality = new mongoose.model("Localities", FeedbackSchema);
module.exports = NewLocality;
