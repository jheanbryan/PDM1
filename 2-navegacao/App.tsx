import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./src/pages/TelaInicial";
import Detalhes from "./src/pages/Detalhes";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaInicial} options={{
          title: "Página Inicial"
        }}/>
        <Stack.Screen name="Detalhes" component={Detalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

