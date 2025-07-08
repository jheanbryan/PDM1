// src/routes/AuthStack.tsx
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/Welcome";
import LoginScreen from "../Screens/Login";
import RegisterScreen from "../Screens/Register";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
