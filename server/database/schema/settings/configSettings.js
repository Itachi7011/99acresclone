const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const ConfigSettingsSchema = new mongoose.Schema({
  headingText: {
    type: String,
  },
  homePageDescription: {
    type: String,
  },
  homePageTitle: {
    type: String,
  },
  homePageMetaKeyword: {
    type: String,
  },
  homePageMetaDescription: {
    type: String,
    // type = Data in input tag
  },
  footerText: {
    type: String,
    // type = Data in input tag
  },
  googleAnalyticsCode: {
    type: String,
    // type = Data in input tag
  },
 
  robots_txt_Content: {
    type: String,
    // type = Data in input tag
  },
  siteMessage: {
    type: String,
    // type = Data in input tag
  },
  mainLogo: {
    data: String,
    contentType: String,
  },
  robortFile: {
    data: String,
    contentType: String,
  },
  dateOfFormSubmission: {
    type: String,
  },
});

const NewConfigSettings = new mongoose.model(
  "Config_Settings",
  ConfigSettingsSchema
);
module.exports = NewConfigSettings;
