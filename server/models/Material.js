const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  partName: {
    type: String,
    required: true
  },
  partNumber: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  quantInStock: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true,
    enum: ['feet', 'pieces', 'rolls'] // Add more as needed
  }
});

module.exports = mongoose.model('Material', materialSchema);
