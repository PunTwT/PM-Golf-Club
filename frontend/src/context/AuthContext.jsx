import { createContext, useContext, useState } from "react";
import { login as loginAPI } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = async (username, password) => {
    try {
      const result = await loginAPI(username, password);

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
  const logout = () => {
    setIsAdmin(false)
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
