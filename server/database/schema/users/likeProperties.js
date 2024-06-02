const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const LikedPropertySchema = new mongoose.Schema({
  id: {
    type: String,
  },
  userName: {
    type: String,
  },
  propertyName: {
    type: String,
  }
});

const NewLikeProperty = new mongoose.model(
  "LikedProperties",
  LikedPropertySchema
);
module.exports = NewLikeProperty;
