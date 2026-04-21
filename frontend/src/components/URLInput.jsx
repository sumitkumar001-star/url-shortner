/**
 * URL INPUT COMPONENT
 * This component handles the URL input field and submit button
 * Components are reusable pieces of the UI
 */

/**
 * URLInput Component
 * @param {string} url - Current URL value
 * @param {function} onUrlChange - Callback when URL input changes
 * @param {function} onSubmit - Callback when user clicks Shorten button
 * @param {boolean} loading - Is the request currently loading?
 * @returns {JSX} - The rendered component
 */
export const URLInput = ({ url, onUrlChange, onSubmit, loading }) => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-3xl">
      {/* URL Input Field */}
      <input
        type="text"
        className="px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 w-full shadow-md transition duration-200 text-gray-800 placeholder-gray-500"
        placeholder="Enter long URL (e.g., https://example.com/very/long/url)"
        value={url}
        onChange={(e) => onUrlChange(e.target.value)}
        disabled={loading}
      />

      {/* Shorten Button */}
      <button
        onClick={onSubmit}
        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 w-full sm:w-auto shadow-lg transform hover:scale-105"
        disabled={loading}
      >
        {loading ? "⏳ Shortening..." : "✂️ Shorten"}
      </button>
    </div>
  );
};
