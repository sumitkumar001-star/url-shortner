/**
 * QR CODE COMPONENT
 * This component displays a QR code and provides a download option
 */

import { QRCode } from "react-qr-code";

/**
 * QRCodeDisplay Component
 * @param {string} url - The URL to encode in the QR code
 * @param {string} qrImage - Base64 encoded QR code image
 * @param {function} onDownload - Callback when user clicks Download button
 * @returns {JSX} - The rendered component
 */
export const QRCodeDisplay = ({ url, qrImage }) => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      {/* QR Code Container */}
      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200 mt-6">
        <p className="mb-4 text-center font-bold text-gray-800 text-lg">
          📱 Scan QR Code:
        </p>

        {/* QR Code */}
        <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
          <QRCode value={url} size={200} level="H" />
        </div>
      </div>

      {/* Download Button */}
      {qrImage && (
        <a
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition duration-200 w-full text-center block shadow-lg transform hover:scale-105"
          download="qr-code.png"
          href={qrImage}
        >
          ⬇️ Download QR Code
        </a>
      )}
    </div>
  );
};
