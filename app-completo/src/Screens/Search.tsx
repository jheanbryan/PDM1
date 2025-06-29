import { StyleSheet, TextInput, View } from 'react-native';

import AnimeCard from '../components/AnimeCard';
import InputSearch from '../components/InputSearch'
import FloatButton from '../components/FloatButton';

export default function Search() {
  return (
    <View style={styles.container}>
      <InputSearch />

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
