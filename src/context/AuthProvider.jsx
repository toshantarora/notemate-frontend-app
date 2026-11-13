import { useState } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error("Please enter email and password");
    }

    setUser({
      name: email.split("@")[0],
      email,
    });
  };

  const signup = async ({ name, email, password }) => {
    if (!name || !email || !password) {
      throw new Error("Please fill all required fields");
    }

    setUser({ name, email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};