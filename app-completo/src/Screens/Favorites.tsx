import { StyleSheet, Text, TextInput, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';

import InputSearch from '../components/InputSearch';
import FloatButton from '../components/FloatButton';
import FavoriteAnimeCard from '../components/FavoriteAnimeCard';
import ModalAnime from '../components/ModalAnime';
import { useState } from 'react';

export default function Favorites() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <InputSearch />

      <FavoriteAnimeCard onPress={() => setModalVisible(true)}/>

      <FloatButton onPress={() => setModalVisible(true)}/>

      <ModalAnime visible={modalVisible} onClose={() => setModalVisible(false)} />

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