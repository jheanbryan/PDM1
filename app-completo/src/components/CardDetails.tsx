import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { getAnimeDetails } from '../services/jikan';

interface CardDetailsProps {
  animeId: number;
}

export default function CardDetails({ animeId }: CardDetailsProps) {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      const data = await getAnimeDetails(animeId);
      if (data) {
        setDetails(data.details);
        setImages(data.images);
      }
      setLoading(false);
    }

    fetchDetails();
  }, [animeId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 40 }} />;
  }

  if (!details) {
    return <Text style={styles.errorText}>Não foi possível carregar os detalhes.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{details.title}</Text>
      <Image source={{ uri: details.images.jpg.image_url }} style={styles.mainImage} />

      <Text style={styles.subtitle}>Sinopse:</Text>
      <Text style={styles.description}>{details.synopsis || 'Sem sinopse disponível.'}</Text>

      {details.trailer?.embed_url && (
        <Text style={styles.subtitle}>Trailer:</Text>
      )}

      {details.episodes && (
        <Text style={styles.info}>Episódios: {details.episodes}</Text>
      )}

      {details.score && (
        <Text style={styles.info}>Nota: {details.score} / 10</Text>
      )}

      {images.length > 0 && (
        <View>
          <Text style={styles.subtitle}>Imagens promocionais:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {images.map((imgUrl, index) => (
              <Image key={index} source={{ uri: imgUrl }} style={styles.galleryImage} />
            ))}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#4CAF50',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    color: '#ccc',
    lineHeight: 22,
  },
  info: {
    color: '#aaa',
    marginTop: 8,
  },
  galleryImage: {
    width: 140,
    height: 200,
    borderRadius: 8,
    marginRight: 10,
  },
  errorText: {
    color: '#f55',
    marginTop: 20,
    textAlign: 'center',
  },
});
