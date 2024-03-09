const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  cardholderName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
