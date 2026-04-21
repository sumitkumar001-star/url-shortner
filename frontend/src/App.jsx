/**
 * MAIN APP COMPONENT
 * This is the root component that brings everything together
 * It manages the application state and coordinates between components
 */

import { useState } from "react";
import QRCodeGenerator from "qrcode";
import { shortenUrl } from "./services/urlService.js";
import { URLInput } from "./components/URLInput.jsx";
import { ShortURLDisplay } from "./components/ShortURLDisplay.jsx";
import { QRCodeDisplay } from "./components/QRCodeDisplay.jsx";

/**
 * App Component
 * Manages the URL shortener logic and renders all components
 */
function App() {
  // STATE MANAGEMENT
  // These are the variables that track the current state of the app

  // The URL that the user enters
  const [url, setUrl] = useState("");

  // The shortened URL returned from the server
  const [shortUrl, setShortUrl] = useState("");

  // Whether the copy button was clicked recently
  const [copied, setCopied] = useState(false);

  // The QR code image as a base64 string
  const [qrImage, setQrImage] = useState("");

  // Whether an API request is currently in progress
  const [loading, setLoading] = useState(false);

  // Error message if something goes wrong
  const [error, setError] = useState("");

  /**
   * Handle the Shorten button click
   * This function:
   * 1. Validates the URL
   * 2. Calls the API to shorten it
   * 3. Generates a QR code
   */
  const handleShorten = async () => {
    // Don't proceed if URL is empty or already loading
    if (!url || loading) return;

    setLoading(true);
    setError("");

    try {
      // Call the API to shorten the URL
      const result = await shortenUrl(url);

      // Update state with the new short URL
      setShortUrl(result.shortUrl);
      setCopied(false);

      // Generate a QR code for the short URL
      const qrDataUrl = await QRCodeGenerator.toDataURL(result.shortUrl);
      setQrImage(qrDataUrl);
    } catch (err) {
      // Show error message to user
      setError(err.message || "Something went wrong");
      console.error("Error:", err);
    } finally {
      // Stop loading state
      setLoading(false);
    }
  };

  /**
   * Handle the Copy button click
   * Copies the short URL to clipboard and shows confirmation
   */
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Clear the "copied" state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  /**
   * RENDER
   * Return the JSX that will be displayed on screen
   */
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2 text-white drop-shadow-lg">🔗 ShrinkIt - URL SHORTENER</h1>
        <p className="text-white text-opacity-90 text-lg drop-shadow-md">
          Transform long URLs into short, shareable links with QR codes
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
        {/* URL Input Component */}
        <URLInput
          url={url}
          onUrlChange={setUrl}
          onSubmit={handleShorten}
          loading={loading}
        />

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-lg shadow-md font-semibold">
            ⚠️ {error}
          </div>
        )}

        {/* Results Section - Only show if we have a short URL */}
        {shortUrl && (
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg border border-purple-100">
            {/* Short URL Display Component */}
            <ShortURLDisplay
              shortUrl={shortUrl}
              copied={copied}
              onCopy={handleCopy}
            />

            {/* QR Code Component */}
            <QRCodeDisplay url={shortUrl} qrImage={qrImage} />
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="text-center text-white text-opacity-80 text-sm mt-8 drop-shadow-md">
        <p>📌 Built with React & Tailwind CSS</p>
        <p>✨ Powered by Express.js Backend</p>
      </div>
    </div>
  );
}

export default App;
