const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  userId: String,
  name: String,
  quantity: Number,
  unit: String,
  category: String,
  minStock: Number,
  expiryDate: Date
});

module.exports = mongoose.model("Item", itemSchema);