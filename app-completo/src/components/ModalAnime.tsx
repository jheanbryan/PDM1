import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { Anime } from '../types/AnimeTypes';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (anime: Anime) => void;
}

export default function ModalAnime({ visible, onClose, onSave }: Props) {
  const [anime, setAnime] = useState<Anime>({
    name: '',
    rating: '',
    description: '',
  });

  function saveFavoriteAnime() {
    onSave(anime); // envia para o componente pai
    setAnime({ name: '', rating: '', description: '' }); 
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.text}>Novo</Text>

          <TextInput
            style={styles.input}
            placeholder='Digite o nome do anime'
            placeholderTextColor="#aaa"
            value={anime.name}
            onChangeText={(text) => setAnime({ ...anime, name: text })}
          />

          <TextInput
            style={styles.input}
            placeholder='Digite a nota'
            placeholderTextColor="#aaa"
            value={anime.rating}
            onChangeText={(text) => setAnime({ ...anime, rating: text })}
          />

          <TextInput
            style={styles.input}
            placeholder='Digite uma descrição'
            placeholderTextColor="#aaa"
            value={anime.description}
            onChangeText={(text) => setAnime({ ...anime, description: text })}
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
    gap: 10
  },
  text: { color: '#fff', fontSize: 18 },
    input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 16,
  },
  lineButtons:{
    flexDirection: 'row',
    gap: 10
  },
  saveBtn: { 
    backgroundColor: '#4CAF50', 
    marginTop: 16, 
    padding: 10,
    borderRadius: 8,
    color: '#dcdcdc'
  },
  closeBtn: { 
    backgroundColor: '#e53935', 
    marginTop: 16, 
    padding: 10,
    borderRadius: 8,
    color: '#dcdcdc'
  },
});
