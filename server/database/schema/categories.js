const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
  },

  status: {
    type: String,
  },

  dateOfFormSubmission: {
    type: String,
  },
});

const NewCategory = new mongoose.model("Categories", CategorySchema);
module.exports = NewCategory;
