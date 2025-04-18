import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";


export default function Detalhes() {
    const navigation = useNavigation<any>();
  return(
    <View>
      Tela de detalhes

      <Button onPress={() => navigation.goBack()}>
        Voltar para a página inicial
      </Button>
    </View>
  );
};