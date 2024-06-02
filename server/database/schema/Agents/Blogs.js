const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

BlogsSchema = new mongoose.Schema({
  agentName: {
    type: String,
  },
  blogTitle: {
    type: String,
  },
  blog_content: {
    type: String,
  },
  blog_tags: [String],
  dateOfFormSubmission: {
    type: String,
  },
});

const NewBlog = new mongoose.model("Blogs_Details", AgentServicesSchema);
module.exports = NewBlog;
