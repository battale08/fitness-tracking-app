import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useApp } from '../../src/contexts/appProvider';
import RiskOMeter from '../components/riskMeter';

export default function RiskDetail() {
  const { state } = useApp();
  const { profile, riskScores } = state;

  // Assuming age ~38 and moderate activity if not set
  const age = profile?.age || 38;
  const activityLevel = profile?.activityLevel || 'moderate';

  // Dynamic risk descriptions (simplified logic)
  const getRiskDescription = (system: string, score: number) => {
    if (score < 20) return 'Low risk - Maintain healthy habits.';
    if (score < 40) return 'Moderate risk - Consider lifestyle adjustments.';
    return 'High risk - Consult a healthcare professional.';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Risk Overview</Text>
      <Text style={styles.subheader}>
        For a {age}-year-old with {activityLevel} activity level
      </Text>

      <View style={styles.riskSection}>
        <RiskOMeter scores={riskScores} />
        {Object.entries(riskScores).map(([system, score]) => (
          <View key={system} style={styles.riskCard}>
            <Text style={styles.riskTitle}>{system} System</Text>
            <Text style={styles.riskScore}>{score}% Risk</Text>
            <Text style={styles.riskDescription}>
              {system === 'Cardio' && 'e.g., Heart Disease, Hypertension'}
              {system === 'Neuro' && 'e.g., Early Onset Dementia'}
              {system === 'Respiratory' && 'e.g., Asthma Risk'}
              {system === 'Digestive' && 'e.g., Diabetes, Osteoarthritis'}
            </Text>
            <Text style={styles.riskAdvice}>{getRiskDescription(system, score)}</Text>
          </View>
        ))}
      </View>

      <View style={styles.noteSection}>
        <Text style={styles.noteTitle}>Note</Text>
        <Text style={styles.noteText}>
          These risk scores are illustrative. In a real app, they’d come from a risk model using age, BMI, activity level, family history, vitals, and recent lab results.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f6fa',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 16,
  },
  riskSection: {
    marginBottom: 20,
  },
  riskCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  riskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  riskScore: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e74c3c',
    marginVertical: 8,
  },
  riskDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  riskAdvice: {
    fontSize: 14,
    color: '#34495e',
    fontStyle: 'italic',
  },
  noteSection: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2E8B57',
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  noteText: {
    fontSize: 14,
    color: '#555',
  },
});