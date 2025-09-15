import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type GoalCardProps = {
  id: string;
  title: string;
  target: string;
  completed?: boolean;
  onToggle: () => void;
  onSwap: () => void;
};

const GoalCard: React.FC<GoalCardProps> = ({ title, target, completed, onToggle, onSwap }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.target}>{target}</Text>
    </View>
    <View style={styles.actions}>
      <TouchableOpacity onPress={onToggle} style={styles.button}>
        <Text style={styles.buttonText}>{completed ? 'Undo' : 'Done'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSwap} style={styles.button}>
        <Text style={styles.buttonText}>Swap</Text>
      </TouchableOpacity>
    </View>
    {completed && (
     <Text style={styles.checkmarkText}>✅</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  target: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#ecf0f1',
  },
  buttonText: {
    fontSize: 14,
    color: '#2c3e50',
  },
  checkmarkText: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 15,
  }
});

export default GoalCard;