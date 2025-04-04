import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';

export default function Button() {

  return (
    <View style={styles.button}>
      <Foundation name="pencil" size={24} color="black" />
      <Text style={styles.textButton}>Escrever</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#686868',
    display: 'flex',
    gap: 5,
    position: 'absolute',
    bottom: 30,
    right: 10
  },
  pincelImage: {
    width: 32,
    height: 32
  },
  textButton: {
    color: '#fff',

  }
});
