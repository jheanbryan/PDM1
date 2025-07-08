

import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ModalAnime from '../components/ModalAnime';
import { Anime } from '../types/AnimeTypes';
import FloatButton from '../components/FloatButton';
import InputSearchLine from '../components/InputSearchLine';
import FavoriteAnimeCard from '../components/FavoriteAnimeCard';

export default function Favorites() {
  const [modalVisible, setModalVisible] = useState(false);
  const [animesList, setAnimesList] = useState<Anime[]>([]);

  function handleAddAnime(newAnime: Anime) {
    console.log('Adicionando ao Favorites:', newAnime);
    setAnimesList(prev => [...prev, newAnime]);
  }

  return (
    <View style={styles.container}>
      <InputSearchLine onPress={() => {}} />


      <FlatList
        data={animesList}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => ( <FavoriteAnimeCard name={item.name} rating={item.rating} description={item.description}/>)}
      />

      <FloatButton onPress={() => setModalVisible(true)} />

      <ModalAnime
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddAnime}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
