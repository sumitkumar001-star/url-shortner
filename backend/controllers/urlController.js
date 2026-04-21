/**
 * URL CONTROLLER
 * This file contains all the business logic for URL operations
 * Controllers handle the "what to do" with incoming requests
 * This keeps our routes clean and organized
 */

import Url from "../models/Url.js";
import { generateShortId, isValidUrl } from "../utils/urlUtils.js";

/**
 * Create a short URL from a long URL
 * POST /shorten
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    // Validate that URL is provided
    if (!originalUrl) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Validate that the URL format is correct
    if (!isValidUrl(originalUrl)) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    // Generate a unique short ID (keep trying until we get one that doesn't exist)
    let shortId;
    let exists = true;

    while (exists) {
      shortId = generateShortId();
      exists = await Url.findOne({ shortId });
    }

    // Save the URL mapping to database
    const url = await Url.create({
      shortId,
      originalUrl,
    });

    // Return the short URL to the user
    res.json({
      shortId: url.shortId,
      shortUrl: `${process.env.BASE_URL}/${url.shortId}`,
      originalUrl: url.originalUrl,
    });
  } catch (error) {
    console.error("Error shortening URL:", error);
    res.status(500).json({ error: "Failed to create short URL" });
  }
};

/**
 * Redirect to original URL using short ID
 * GET /:shortId
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;

    // Find the URL in database
    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Increment click count to track usage
    url.clicks = (url.clicks || 0) + 1;
    await url.save();

    // Redirect user to the original URL
    res.redirect(url.originalUrl);
  } catch (error) {
    console.error("Error redirecting URL:", error);
    res.status(500).json({ error: "Failed to redirect" });
  }
};

/**
 * Get statistics about a shortened URL
 * GET /stats/:shortId
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getStats = async (req, res) => {
  try {
    const { shortId } = req.params;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Return statistics about the URL
    res.json({
      shortId: url.shortId,
      originalUrl: url.originalUrl,
      clicks: url.clicks,
      createdAt: url.createdAt,
      updatedAt: url.updatedAt,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
};
