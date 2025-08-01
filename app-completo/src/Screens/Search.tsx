import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import InputSearchLine from '../components/InputSearchLine';
import AnimeCard from '../components/AnimeCard';
import ModalAnimeDetails from '../components/ModalAnimeDetails';

import { searchAnime } from '../services/jikan';
import { Anime } from '../models/Anime';

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [limit, setLimit] = useState(50);
  const [selectedAnimeId, setSelectedAnimeId] = useState<number | null>(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const handleSearchInput = async (value: string) => {
    setSearchTerm(value);
    try {
      const animeData = await searchAnime(value);
      setAnimes(animeData);
    } catch (error) {
      console.error('Erro ao buscar animes:', error);
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <InputSearchLine onPress={handleSearchInput} />

        <Picker
          selectedValue={limit}
          style={styles.picker}
          onValueChange={(itemValue: any) => setLimit(itemValue)}
        >
          <Picker.Item label="50 resultados" value={50} />
          <Picker.Item label="20 resultados" value={20} />
          <Picker.Item label="10 resultados" value={10} />
        </Picker>

        <ScrollView>
          {animes.slice(0, limit).map(anime => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              onPress={() => {
                setSelectedAnimeId(anime.mal_id);
                setDetailsVisible(true);
              }}
            />
          ))}

          {animes.length === 0 && (
            <Text style={styles.noResults}>Nenhum anime encontrado.</Text>
          )}
        </ScrollView>

        <ModalAnimeDetails
          visible={detailsVisible}
          animeId={selectedAnimeId}
          onClose={() => {
            setDetailsVisible(false);
            setSelectedAnimeId(null);
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  picker: {
    color: 'white',
    backgroundColor: '#1e1e1e',
    marginBottom: 10,
  },
  noResults: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});
