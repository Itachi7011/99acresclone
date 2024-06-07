const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const LikedProjectsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  userName: {
    type: String,
  },
  projectName: {
    type: String,
  }
});

const NewLikeProjects = new mongoose.model(
  "LikedProjects",
  LikedProjectsSchema
);
module.exports = NewLikeProjects;
