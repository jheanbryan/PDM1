import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function TelaInicial() {
  const navigation = useNavigation<any>();

  return(
    <View style={styles.container}>

      <Text style={styles.text}>Email:</Text>
      <View style={styles.viewInput}>
        <TextInput 
          style={styles.input}
          placeholder="Digite seu email"
        />
      </View>

      <Text>Senha:</Text>
      <View style={styles.viewInput}>
        <TextInput 
          style={styles.input}
          placeholder="Digite sua senha"
        />
      </View>

      <Button onPress={() => navigation.goBack()}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});