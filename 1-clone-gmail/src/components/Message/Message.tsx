import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  sender: string;
  title: string;
  text: string;
  urlImage: string;
  messageDate: string
}

export default function CardMessage(props: Props) {
  const [profileImage, setprofileImage] = useState(require('../../assets/profile.png'))

  return (
    <View style={styles.cardMessage}>
      
      <View style={styles.flexColView}>
        <Image source={profileImage} style={styles.imageProfile}/>
      </View>


      <View style={styles.flexColView}>
        <Text style={styles.sender}>Remetente</Text>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.text}>texto</Text>
      </View>


      <View style={styles.flexColView}>
        <Text>11:11</Text>
        <Ionicons name="star-outline" size={24} color="black" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row'
  },
  flexColView: {
    display: 'flex',
    flexDirection: 'column'
  },
  imageProfile: {
    borderRadius: '50%',
    width: 64,
    height: 64
  }, 
  sender: {
    color: '#fff',
  }  ,
  title: {
    color: '#fff',
  },
  text: {
    color: '#303030',
  },
  starIcon: {
    width: 32,
    height: 32
  }
});
