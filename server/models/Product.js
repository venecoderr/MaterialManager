import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  partNumber: {
    type: Number,
    required: true
  },
  listNumber: {
    type: Number,
    required: true
  },
  // Optionally, add timestamps or other fields as needed
});

export const Product = mongoose.model('Product', productSchema);