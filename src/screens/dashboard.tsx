import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { useApp } from '../../src/contexts/appProvider';
import GoalCard from '../components/goalCard';
import AddGoal from '../../src/screens/onboarding/addGoal';
import { Keyboard } from 'react-native';

export default function Dashboard() {
  const { state, dispatch } = useApp();
  const { profile, streakDays } = state;
  const [modalVisible, setModalVisible] = useState(false);

  const toggle = (id: string) => dispatch({ type: 'COMPLETE_GOAL_TODAY', payload: id });

  const swap = (id: string) => {
    const newGoal = { id, title: 'New: Light Yoga', target: '10 min yoga' };
    dispatch({ type: 'SWAP_GOAL', payload: { oldId: id, newGoal } });
  };

  const addNewGoal = () => {
    setModalVisible(true);
  };

  const getDays = () => {
    return state.streakDays === 1 ? "day" : "days";
  };

  const handleOutsidePress = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Dashboard</Text>
      {profile?.name && <Text style={styles.welcome}>Welcome, {profile.name}!</Text>}
      <Text style={styles.streak}>Streak: {streakDays} {getDays()} 🔥</Text>

      <FlatList
        data={state.goals}
        keyExtractor={g => g.id}
        renderItem={({ item }) => (
          <GoalCard
            id={item.id}
            title={item.title}
            target={item.target}
            completed={item.completedToday}
            onToggle={() => toggle(item.id)}
            onSwap={() => swap(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.addButton} onPress={addNewGoal}>
        <Text style={styles.addButtonText}>Add New Goal</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
       <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContent}>
                <AddGoal onClose={() => setModalVisible(false)} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f6fa',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
  },
  welcome: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 12,
  },
  streak: {
    fontSize: 18,
    color: '#e74c3c',
    fontWeight: '600',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  addButton: {
    backgroundColor: '#2E8B57',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '80%',
    maxHeight: '80%',
  },
});