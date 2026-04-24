// context/AuthContext.jsx
// Provides global authentication state and actions (login/logout) via React Context

import { createContext, useContext, useState } from "react";
import { login as loginAPI } from "../services/authService";

// Create the context object — consumed by useAuth() throughout the app
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // isAdmin tracks whether the current user is logged in as an administrator
  const [isAdmin, setIsAdmin] = useState(false);

  // Calls the auth API and updates state based on the server response
  const login = async (username, password) => {
    try {
      const result = await loginAPI(username, password);

      // Grant admin access only when the server confirms a successful login
      if (result.message === "Login successful") {
        setIsAdmin(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // Clears admin access
  const logout = () => {
    setIsAdmin(false)
  };

  // Expose auth state and actions to all descendant components
  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — use this instead of useContext(AuthContext) directly
export function useAuth() {
  return useContext(AuthContext);
}
