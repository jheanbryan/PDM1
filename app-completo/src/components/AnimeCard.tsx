import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Anime } from '../models/Anime';
import Entypo from "@expo/vector-icons/Entypo";

interface Props {
  anime: Anime;
  onPress?: () => void;
}

export default function AnimeCard({ anime, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: anime.images.jpg.image_url }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{anime.title}</Text>
        <Text style={styles.details}>Nota: {anime.score ?? 'N/A'}</Text>
        <Text style={styles.details}>Episódios: {anime.episodes ?? '??'}</Text>

        <View style={styles.favButton}>
          <Text style={{ color: '#fff' }}>Favoritar</Text>
          <Entypo name="heart" size={20} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
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
