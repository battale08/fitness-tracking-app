import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useApp } from '../../../src/contexts/appProvider';

export default function AddGoal({ onClose }: { onClose: () => void }) {
  const { dispatch } = useApp();
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');

  const saveGoal = () => {
    if (title && target) {
      dispatch({ type: 'ADD_GOAL', payload: { title, target } });
      onClose();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add new wellness goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Goal Title (e.g., Meditation)"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Target (e.g., 15 min meditation)"
        value={target}
        onChangeText={setTarget}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={saveGoal}>
          <Text style={styles.saveButtonText}>Save Goal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f6fa',
    borderRadius: 12,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#2E8B57',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});