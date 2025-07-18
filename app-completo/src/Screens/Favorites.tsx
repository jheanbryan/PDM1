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
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  useEffect(() => {
    async function setup() {
      const database = await SQLite.openDatabaseAsync("animeDatabase.db");
      setDb(database);
    }

    setup();
  }, []);

  useEffect(() => {
    if (!db || !user?.id) return;
    loadFavorites();
  }, [db, user]);

  async function loadFavorites() {
    if (!db || !user?.id) return;

    const result = await db.getAllAsync(
      `SELECT id, anime as name, rating, description FROM favorite_anime WHERE user_id = ?`,
      [user.id]
    );
    setAnimesList(result);
    setAllAnimesList(result);
  }

  function handleSearch(query: string) {
    if (!query) {
      setAnimesList(allAnimesList);
      return;
    }

    const filtered = allAnimesList.filter((anime) =>
      anime.name.toLowerCase().includes(query.toLowerCase())
    );
    setAnimesList(filtered);
  }

  async function handleAddOrEditAnime(anime: Anime) {
    if (!db || !user?.id) return;

    try {
      if (anime.id) {
        await db.runAsync(
          `UPDATE favorite_anime SET anime = ?, rating = ?, description = ? WHERE id = ?`,
          [anime.name, anime.rating, anime.description, anime.id]
        );
      } else {
        await db.runAsync(
          `INSERT INTO favorite_anime (user_id, anime, rating, description) VALUES (?, ?, ?, ?)`,
          [user.id, anime.name, anime.rating, anime.description]
        );
      }

      setSelectedAnime(null);
      setModalVisible(false);
      loadFavorites();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o anime.");
      console.error(error);
    }
  }

  async function handleDeleteAnime(id: number) {
    if (!db) return;

    try {
      await db.runAsync(`DELETE FROM favorite_anime WHERE id = ?`, [id]);
      setAnimesList((prev) => prev.filter((anime) => anime.id !== id));
      setAllAnimesList((prev) => prev.filter((anime) => anime.id !== id));
    } catch (error) {
      Alert.alert("Erro", "Erro ao deletar o anime.");
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <InputSearchLine onPress={handleSearch} />

      {animesList.length === 0 && (
        <Text style={{ color: "white", textAlign: "center", marginTop: 0 }}>
          Nenhum anime favorito.
        </Text>
      )}

      <FlatList
        data={animesList}
        keyExtractor={(item) => item.id?.toString() || item.name}
        renderItem={({ item }) => (
          <FavoriteAnimeCard
            name={item.name}
            rating={item.rating}
            description={item.description}
            onEdit={() => {
              setSelectedAnime(item);
              setModalVisible(true);
            }}
            onDelete={() => handleDeleteAnime(item.id!)}
          />
        )}
      />

      <FloatButton
        onPress={() => {
          setSelectedAnime(null);
          setModalVisible(true);
        }}
      />

      <ModalAnime
        visible={modalVisible}
        anime={selectedAnime}
        onClose={() => {
          setSelectedAnime(null);
          setModalVisible(false);
        }}
        onSave={handleAddOrEditAnime}
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
