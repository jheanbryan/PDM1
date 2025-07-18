import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { Anime } from '../types/AnimeTypes';

interface Props {
  visible: boolean;
  anime?: Anime | null;
  onClose: () => void;
  onSave: (anime: Anime) => void;
}

export default function ModalAnime({ visible, anime, onClose, onSave }: Props) {
  const [animeData, setAnimeData] = useState<Anime>({
    name: '',
    rating: '',
    description: '',
  });

  useEffect(() => {
    if (anime) {
      setAnimeData(anime);
    } else {
      setAnimeData({ name: '', rating: '', description: '' });
    }
  }, [anime, visible]);

  function saveFavoriteAnime() {
    onSave(animeData);
    setAnimeData({ name: '', rating: '', description: '' });
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.text}>
            {anime ? 'Editar Anime' : 'Novo Anime'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome do anime"
            placeholderTextColor="#aaa"
            value={animeData.name}
            onChangeText={(text) => setAnimeData({ ...animeData, name: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite a nota"
            placeholderTextColor="#aaa"
            value={animeData.rating}
            onChangeText={(text) => setAnimeData({ ...animeData, rating: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite uma descrição"
            placeholderTextColor="#aaa"
            value={animeData.description}
            onChangeText={(text) =>
              setAnimeData({ ...animeData, description: text })
            }
          />

          <View style={styles.lineButtons}>
            <Pressable onPress={saveFavoriteAnime}>
              <Text style={styles.saveBtn}>Salvar</Text>
            </Pressable>
            <Pressable onPress={onClose}>
              <Text style={styles.closeBtn}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#1e1e1e',
    padding: 24,
    borderRadius: 10,
    width: '80%',
    gap: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    fontSize: 16,
  },
  lineButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  saveBtn: {
    backgroundColor: '#4CAF50',
    marginTop: 16,
    padding: 10,
    borderRadius: 8,
    color: '#dcdcdc',
  },
  closeBtn: {
    backgroundColor: '#e53935',
    marginTop: 16,
    padding: 10,
    borderRadius: 8,
    color: '#dcdcdc',
  },
});
