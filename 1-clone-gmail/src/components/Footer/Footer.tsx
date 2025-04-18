import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';

export default function Footer() {
  return (
    <View style={styles.footer}>      
      <View  style={styles.ViewIcon}>
        <MaterialIcons name="email" size={24} color="black" />
      </View>

      <View  style={styles.ViewIcon}>
        <Octicons name="device-camera-video" size={24} color="black" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#686868',
    display: 'flex'
  },
  ViewIcon: {
    
  }
});
