/**
 * DATABASE CONFIGURATION
 * This file handles the connection to MongoDB database
 * It's separated here so the main server file stays clean and organized
 */

import mongoose from "mongoose";

/**
 * Connect to MongoDB using the connection string from .env file
 * @param {string} mongoUri - MongoDB connection URI from environment variables
 * @returns {Promise} - Returns the mongoose connection promise
 */
export const connectDatabase = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri);
    console.log("✓ Connected to MongoDB successfully");
  } catch (error) {
    console.error("✗ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if database connection fails
  }
};

export default mongoose;
