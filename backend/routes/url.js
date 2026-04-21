/**
 * URL ROUTES
 * This file defines all the HTTP endpoints for URL operations
 * Routes connect HTTP requests to controller functions
 * Think of routes as the "entry points" to your application
 */

import express from "express";
import {
  shortenUrl,
  redirectUrl,
  getStats,
} from "../controllers/urlController.js";

const router = express.Router();

/**
 * POST /shorten
 * Create a new shortened URL
 * Expected body: { originalUrl: "https://example.com/very/long/url" }
 */
router.post("/shorten", shortenUrl);

/**
 * GET /:shortId
 * Redirect to the original URL using the short ID
 * Example: GET /abc1234 -> redirects to original URL
 */
router.get("/:shortId", redirectUrl);

/**
 * GET /stats/:shortId
 * Get statistics (clicks, creation date) for a shortened URL
 * Example: GET /stats/abc1234
 */
router.get("/stats/:shortId", getStats);

export default router;
