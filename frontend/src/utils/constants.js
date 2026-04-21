/**
 * CONSTANTS
 * This file stores reusable constants used throughout the frontend
 * Keeping them here makes it easy to change values globally
 */

// Colors used in the application
export const COLORS = {
  PRIMARY: "#2563eb", // Blue
  SUCCESS: "#16a34a", // Green
  DANGER: "#dc2626", // Red
  SECONDARY: "#6b7280", // Gray
};

// Messages
export const MESSAGES = {
  COPY_SUCCESS: "Copied to clipboard!",
  COPY_ERROR: "Failed to copy",
  SHORTEN_ERROR: "Failed to shorten URL",
  INVALID_URL: "Please enter a valid URL",
};

// Timeouts (in milliseconds)
export const TIMEOUTS = {
  COPY_NOTIFICATION: 2000, // Show "Copied!" message for 2 seconds
  API_TIMEOUT: 10000, // API request timeout
};
