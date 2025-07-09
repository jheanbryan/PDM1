import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { initializeDatabase } from '../database/database';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);

  useEffect(() => {
    async function setup() {
      const database = await SQLite.openDatabaseAsync('animeDatabase.db');
      await initializeDatabase(database);
      setDb(database);
    }
    setup();
  }, []);

  async function addNewUser(name: string, email: string, password: string) {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await db?.runAsync(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, password]
      );

      const allUsers = await db?.getAllAsync('SELECT * FROM users');
      console.log("Usuários cadastrados:", allUsers);

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate('Login');
    } catch (error: any) {
      if (error?.message?.includes("UNIQUE")) {
        Alert.alert("Erro", "Este e-mail já está cadastrado.");
      } else {
        Alert.alert("Erro", "Erro ao cadastrar usuário.");
        console.error(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.title}>
        <Entypo name="add-user" size={28} color="#fff" />
        <Text style={styles.titleText}>Criar Conta</Text>
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => addNewUser(name, email, password)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem uma conta? Clique aqui para fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 24,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputArea: {
    width: '100%',
    gap: 4,
  },
  label: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 2,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  linkText: {
    color: '#4CAF50',
    textDecorationLine: 'underline'
  }
});
