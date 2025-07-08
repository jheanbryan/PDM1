// App.tsx
import React from "react";
import Routes from "./src/Routes/index";
import { AuthProvider } from "./src/Context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
