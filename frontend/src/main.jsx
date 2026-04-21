/**
 * MAIN ENTRY POINT
 * This file is the first JavaScript file that runs in the browser
 * It mounts the React app to the DOM
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Import global styles
import App from "./App.jsx"; // Import the main App component

/**
 * Mount the React application
 * This finds the element with id="root" in index.html and renders the App component inside it
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode helps catch potential problems in development */}
    <App />
  </StrictMode>
);
