import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';

import AnimeCard from '../components/AnimeCard';
import InputSearch from './InputSearchLine'

import Entypo from '@expo/vector-icons/Entypo';

interface onPressType {
  onPress: () => void;
}

export default function FloatButton({ onPress }: onPressType) {
  return (
    <TouchableOpacity  style={styles.btnPlus} onPress={onPress}>
      <Entypo name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
btnPlus: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  backgroundColor: '#4CAF50', 
  padding: 16,
  borderRadius: 50,
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},

});
