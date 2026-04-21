/**
 * URL SCHEMA / MODEL
 * This file defines the structure of how URLs are stored in MongoDB
 * Think of it as a blueprint for URL documents in the database
 */

import mongoose from "mongoose";

/**
 * URL Schema Definition
 * Defines what fields each URL document will have and their types
 */
const urlSchema = new mongoose.Schema(
  {
    // The original long URL that was shortened
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },

    // The unique identifier for the short URL
    shortId: {
      type: String,
      required: true,
      unique: true, // Ensures no two URLs have the same short ID
    },

    // Track how many times this short URL was used
    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

/**
 * Export the Url model
 * This model is used to interact with the URL collection in MongoDB
 */
export default mongoose.model("Url", urlSchema);
