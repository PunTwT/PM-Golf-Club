// authService.js
// Handles authentication API calls — currently provides the login request

import API_BASE_URL from "./api";

// Sends login credentials to the backend and returns the server response
// Returns an object containing a message field
export const login = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Serialize credentials into the request body
    body: JSON.stringify({ username, password }),
  });

  return response.json();
};
