import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Anime } from '../models/Anime';
import profileImage from '../../assets/image.jpg';
import Entypo from "@expo/vector-icons/Entypo";


export default function AnimeCard() {
  return (
    <View style={styles.card}>
      <Image
        source={ profileImage }
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>Dragon Ball Super</Text>
        <Text style={styles.details}>Nota: 9.2</Text>
        <Text style={styles.details}>Detalhes: mais detalhes e tal tal</Text>
        <TouchableOpacity style={styles.favButton}>
          Adicionar como favorito <Entypo name="heart" size={24} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  image: {
    width: 100,
    height: 130,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    gap: 5
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    color: '#aaa',
    fontSize: 14,
  },
favButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  backgroundColor: '#66BB6A',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 8,
  marginTop: 10,
  alignSelf: 'flex-start', 
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 3, 
}

});
