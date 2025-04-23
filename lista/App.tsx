import React, { useState } from 'react';
import {View, StyleSheet, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const App = () => {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState(['Tarefa 1', 'Tarefa 2']);
  const addTarefa = () => {
    setTarefas([...tarefas, texto])
  };

  return(
  <View style={styles.container}>

    <View style={styles.linha}>
      <TextInput value={texto} onChangeText={setTexto} placeholder='Digite algo' style={styles.input}>
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={addTarefa}>
        <Text>
          Adicionar +
        </Text>
      </TouchableOpacity>
    </View>

    <FlashList 
      data={tarefas}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight || 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 5
  },
  button:{
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10
  },
  item: {
    backgroundColor: 'gray',
    padding: 10,
    marginVertical: 10
  }
});

export default App;