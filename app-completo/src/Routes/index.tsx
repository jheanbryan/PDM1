// src/routes/index.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../Context/AuthContext";
import AuthRoutes from "./AuthRoutes";
import TabNavigationRoutes from "./TabNavigationRoutes";


export default function Routes() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigationRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
