// src/components/ModalAnimeDetails.tsx
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getAnimeDetails } from '../services/jikan';

interface Props {
  visible: boolean;
  animeId: number | null;
  onClose: () => void;
}

export default function ModalAnimeDetails({ visible, animeId, onClose }: Props) {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    async function fetchDetails() {
      if (!animeId) return;
      setLoading(true);
      const data = await getAnimeDetails(animeId);
      setDetails(data.details);
      setLoading(false);
    }

    fetchDetails();
  }, [animeId]);

  if (!animeId) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Fechar</Text>
          </TouchableOpacity>

          {loading ? (
            <ActivityIndicator size="large" color="#4CAF50" />
          ) : (
            <ScrollView>
              <Text style={styles.title}>{details.title}</Text>
              <Image source={{ uri: details.images.jpg.image_url }} style={styles.mainImage} />
              <Text style={styles.subtitle}>Sinopse</Text>
              <Text style={styles.description}>{details.synopsis || 'Sem sinopse.'}</Text>
              <Text style={styles.info}>Episódios: {details.episodes}</Text>
              <Text style={styles.info}>Nota: {details.score}</Text>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: '#121212',
    borderRadius: 12,
    padding: 16,
    maxHeight: '90%',
  },
  closeButton: {
    color: '#4CAF50',
    textAlign: 'right',
    marginBottom: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mainImage: {
    width: '100%',
    height: 280,
    borderRadius: 10,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#4CAF50',
    marginTop: 8,
    marginBottom: 4,
  },
  description: {
    color: '#ccc',
    lineHeight: 20,
  },
  info: {
    color: '#aaa',
    marginTop: 6,
  },
});
