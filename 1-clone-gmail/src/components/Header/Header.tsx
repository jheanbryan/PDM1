import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';


export default function Header() {
  const [profileImage, setprofileImage] = useState(require('../../assets/profile.png'))

  return (
    <View style={styles.header}>
      
      <AntDesign name="arrowleft" size={24} color="black" />
      <TextInput
          style={styles.input}
          placeholder="Pesquise no e-email"
        />
      <Image source={profileImage} style={styles.imageProfile}/>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#c4c7c5',
    borderRadius: 20,
    padding: 10,
    width: '90%',
  },
  input: {
    borderWidth: 0,
  },
  imageProfile: {
    borderRadius: '50%',
    width: 32,
    height: 32,
  }
});
