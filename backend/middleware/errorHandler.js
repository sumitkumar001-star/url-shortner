/**
 * ERROR HANDLING MIDDLEWARE
 * Middleware functions run on every request to handle errors consistently
 * This prevents error-handling code from being scattered throughout the application
 */

/**
 * Global error handler middleware
 * This catches any errors thrown in route handlers
 * @param {Object} err - The error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  // Return consistent error response format
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
  });
};

export default errorHandler;
