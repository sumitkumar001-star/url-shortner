/**
 * SHORT URL DISPLAY COMPONENT
 * This component displays the generated short URL and provides copy functionality
 */

/**
 * ShortURLDisplay Component
 * @param {string} shortUrl - The shortened URL to display
 * @param {boolean} copied - Is the URL currently copied to clipboard?
 * @param {function} onCopy - Callback when user clicks Copy button
 * @returns {JSX} - The rendered component
 */
export const ShortURLDisplay = ({ shortUrl, copied, onCopy }) => {
  return (
    <div className="flex flex-col items-start gap-3 w-full max-w-3xl">
      {/* Label */}
      <p className="font-bold text-lg text-gray-800">🔗 Your short link:</p>

      {/* URL Display */}
      <a
        className="text-indigo-600 hover:text-indigo-800 underline break-all font-semibold text-lg bg-indigo-50 px-4 py-2 rounded-lg transition hover:bg-indigo-100"
        target="_blank"
        rel="noopener noreferrer"
        href={shortUrl}
      >
        {shortUrl}
      </a>

      {/* Copy Button */}
      <button
        onClick={onCopy}
        className={`px-6 py-2 rounded-lg font-bold transition duration-200 transform hover:scale-105 shadow-md ${
          copied
            ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600"
            : "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800"
        }`}
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
    </div>
  );
};
