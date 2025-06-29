import { StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { onPressType } from "../types/onPress";
import { useState } from "react";

export default function InputSearchLine({ onPress }: onPressType) {
  const [input, setInput] = useState('');

  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
        placeholder='Busque por um anime'
        placeholderTextColor="#aaa"
        keyboardType="default"
        value={input}
        onChangeText={setInput}
      />

      <TouchableOpacity style={styles.btn} onPress={() => onPress(input)}>
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  inputArea: {
    marginTop: 0,
    marginBottom: 16,
    flexDirection: "row",
    gap: 5,
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 16,
    flex: 1,
  },
  btn: {
    backgroundColor: "#dcdcdc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
