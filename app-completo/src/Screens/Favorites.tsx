import { StyleSheet, Text, TextInput, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';

import InputSearch from '../components/InputSearch';
import FloatButton from '../components/FloatButton';
import FavoriteAnimeCard from '../components/FavoriteAnimeCard';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <InputSearch />
      
      <FloatButton />

      <FavoriteAnimeCard />
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