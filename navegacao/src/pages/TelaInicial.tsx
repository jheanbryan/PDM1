import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";


export default function TelaInicial() {
  const navigation = useNavigation<any>();

  return(
    <View>
      Tela Inicial

      <Button onPress={() => navigation.navigate("Detalhes")}>
        Ir para página de detalhes
      </Button>
    </View>
  );
};