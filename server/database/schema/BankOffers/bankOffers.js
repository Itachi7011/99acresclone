const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const BankOffersSchema = new mongoose.Schema({
  bankOfferName: {
    type: String,
  },
  bankOfferDetails: {
    type: String,
  },
  applyOnBank: {
    type: String,
  },
  rateOfInterest: {
    type: Number,
  },
  startingFrom: {
    type: String,
    // type = Data in input tag
  },
  endedOn: {
    type: String,
        // type = Data in input tag
  }, logo: {
    data: String,
    contentType: String,
  },

  dateOfFormSubmission: {
    type: String,
  },
});

const NewBankOffers = new mongoose.model(
  "Bank_Offers_Details",
  BankOffersSchema
);
module.exports = NewBankOffers;
