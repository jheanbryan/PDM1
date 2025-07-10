// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface AuthContextData {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null)

  function login(userData: User) {
    setUser(userData)
    setIsLoggedIn(true);
  }

  function logout() {
    setUser(null)
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
