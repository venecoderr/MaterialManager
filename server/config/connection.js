import mongoose from 'mongoose'
import 'dotenv' // Load environment variables from .env file

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/materialManagerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;