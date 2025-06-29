import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ModalAnime({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.text}>Novo</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite o nome do anime'
            placeholderTextColor="#aaa"
            keyboardType="default"
          />

          <TextInput
            style={styles.input}
            placeholder='Digite a nota'
            placeholderTextColor="#aaa"
            keyboardType="default"
          />

          <TextInput
            style={styles.input}
            placeholder='Digite uma descrição'
            placeholderTextColor="#aaa"
            keyboardType="default"
          />

          <Pressable onPress={onClose}>
            <View style={styles.lineButtons}>
              <Text style={styles.saveBtn}>Salvar</Text>
              <Text style={styles.closeBtn}>Fechar</Text>
            </View>
          </Pressable>
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
    flex: 1,
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
