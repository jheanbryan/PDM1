import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Alert } from "react-native";
import * as SQLite from "expo-sqlite";

import ModalAnime from "../components/ModalAnime";
import { Anime } from "../types/AnimeTypes";
import FloatButton from "../components/FloatButton";
import InputSearchLine from "../components/InputSearchLine";
import FavoriteAnimeCard from "../components/FavoriteAnimeCard";

import { useAuth } from "../Context/AuthContext";

export default function FavoritesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const { user } = useAuth();
  const [animesList, setAnimesList] = useState<Anime[]>([]);
  const [allAnimesList, setAllAnimesList] = useState<Anime[]>([]);

  useEffect(() => {
    async function setup() {
      const database = await SQLite.openDatabaseAsync("animeDatabase.db");
      setDb(database);
    }

    setup();
  }, []);

  useEffect(() => {
    async function loadFavorites() {
      if (!db || !user?.id) return;

      const result = await db.getAllAsync(
        `SELECT anime as name, rating, description FROM favorite_anime WHERE user_id = ?`,
        [user.id]
      );
      console.log(result)
      setAnimesList(result);
      setAllAnimesList(result);
    }

    loadFavorites();
  }, [db, user]);

    function handleSearch(query: string) {
      setAnimesList(allAnimesList); 

    if (!query) {
      setAnimesList(allAnimesList); 
      return;
    }

    const filtered = allAnimesList.filter(anime =>
      anime.name.toLowerCase().includes(query.toLowerCase())
    );

    setAnimesList(filtered);
  }

  async function handleAddAnime(newAnime: Anime) {
    if (!db || !user?.id) return;

    try {
      await db.runAsync(
        `INSERT INTO favorite_anime (user_id, anime, rating, description) VALUES (?, ?, ?, ?)`,
        [user.id, newAnime.name, newAnime.rating, newAnime.description]
      );

      setAnimesList((prev) => [...prev, newAnime]);

    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o anime.");
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <InputSearchLine onPress={handleSearch} />

      {animesList.length == 0 && (
        <Text style={{ color: "white", textAlign: "center", marginTop: 0 }}>
          Nenhum anime favorito.
        </Text>
      )}

      <FlatList
        data={animesList}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => (
          <FavoriteAnimeCard
            onPress={() => {}}
            name={item.name}
            rating={item.rating}
            description={item.description}
          />
        )}
      />

      <FloatButton onPress={() => setModalVisible(true)} />

      <ModalAnime
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddAnime}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
