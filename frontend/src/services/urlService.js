/**
 * API SERVICE
 * This file handles all API calls to the backend
 * Centralizing API calls here makes it easy to change endpoints or add authentication later
 */

import axios from "axios";

// Base URL for all API calls (from environment variables)
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Create a shortened URL
 * @param {string} originalUrl - The long URL to shorten
 * @returns {Promise} - Returns { shortUrl, shortId, originalUrl }
 */
export const shortenUrl = async (originalUrl) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/shorten`, {
      originalUrl,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to shorten URL");
  }
};

/**
 * Get statistics for a shortened URL
 * @param {string} shortId - The short ID to get stats for
 * @returns {Promise} - Returns { shortId, originalUrl, clicks, createdAt, updatedAt }
 */
export const getUrlStats = async (shortId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stats/${shortId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch stats");
  }
};
