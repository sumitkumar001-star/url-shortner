/**
 * MAIN SERVER FILE
 * This is the entry point of the backend application
 * It sets up the Express server, connects to database, and starts listening for requests
 */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDatabase } from "./config/database.js";
import urlRoutes from "./routes/url.js";
import errorHandler from "./middleware/errorHandler.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

/**
 * MIDDLEWARE SETUP
 * Middleware functions that run on every request
 */

// Enable CORS (Cross-Origin Resource Sharing)
// This allows the frontend to communicate with the backend
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow requests only from frontend URL
    methods: ["GET", "POST"],
  })
);

// Parse incoming JSON requests
app.use(express.json());

/**
 * ROUTES
 * Connect all URL-related routes
 */
app.use("/", urlRoutes);

/**
 * ERROR HANDLING
 * Handle any errors that occur in route handlers
 */
app.use(errorHandler);

/**
 * START SERVER
 * Connect to database first, then start the server
 */
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDatabase(process.env.MONGO_URI);

    // Start listening for incoming requests
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✓ Server running on http://localhost:${PORT}`);
      console.log(`✓ CORS enabled for: ${process.env.FRONTEND_URL}`);
    });
  } catch (error) {
    console.error("✗ Failed to start server:", error.message);
    process.exit(1);
  }
};

// Start the server
startServer();

export default app;

