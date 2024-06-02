const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const Bannerschema = new mongoose.Schema({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  projectUrl: {
    type: String,
  },
  status: {
    type: String,
  },
  usedFor: {
    type: String,
  },
  isUsed: {
    type: Boolean,
    default:false
  },
  logo: {
    data: String,
    contentType: String,
  },

  dateOfFormSubmission: {
    type: String,
  },
});

const NewBanner = new mongoose.model(
  "Banners",
  Bannerschema
);
module.exports = NewBanner;
