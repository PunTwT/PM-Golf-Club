// main.jsx
// Application entry point — mounts the React app into the DOM with all required providers

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // StrictMode enables extra runtime warnings during development
  <StrictMode>
    {/* BrowserRouter provides URL-based routing throughout the app */}
    <BrowserRouter>
    {/* AuthProvider supplies authentication state to all child components */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
