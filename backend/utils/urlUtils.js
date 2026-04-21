/**
 * URL UTILITIES
 * This file contains helper functions for URL operations
 * Utility functions are reusable pieces of code that don't depend on external context
 */

import { nanoid } from "nanoid";

/**
 * Generate a unique short ID
 * Uses nanoid library to create a random string of 7 characters
 * @returns {string} - A unique short ID
 */
export const generateShortId = () => {
  return nanoid(7);
};

/**
 * Validate if a URL string is in correct format
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
