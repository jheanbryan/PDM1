import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

import { onPressType } from '../types/onPress'

export default function FavoriteAnimeCard({ onPress }: onPressType) {

  return (
    <View style={styles.cardFavAnime}>
      <View style={styles.info}>
        <Text style={styles.title}>Dragon Ball Super</Text>
        <Text style={styles.details}>Nota: 9.2</Text>
        <Text style={styles.details}>Detalhes: mais detalhes e tal tal</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton} onPress={onPress}>
          <Entypo name="edit" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Entypo name="trash" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardFavAnime: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  info: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  details: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 2,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 8,
    backgroundColor: '#2c2c2c',
    borderRadius: 6,
  },
});
