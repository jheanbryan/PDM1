import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import InputSearchLine from '../components/InputSearchLine'
import AnimeCard from '../components/AnimeCard';
import { searchAnime } from '../services/jikan';
import { Anime } from '../models/Anime';


export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [animes, setAnimes] = useState<Anime[]>([]);

  const handleSearchInput = async (value: string) => {
    setSearchTerm(value);

    try {
      const animeData = await searchAnime(value);
      console.log(animeData);
      setAnimes(animeData);

    } catch (error) {
      console.error('Erro ao buscar animes:', error);
    }
  };

  return (
    <View style={styles.container}>
      <InputSearchLine onPress={handleSearchInput}/>

      {animes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 16,
  }
});
