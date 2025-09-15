import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useApp } from '../../src/contexts/appProvider';

export default function Progress() {
  const { state } = useApp();

  const now = new Date();
  const last7 = state.progress.filter(p => {
    const d = new Date(p.date);
    return (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24) < 7;
  });
  const last30 = state.progress.filter(p => {
    const d = new Date(p.date);
    return (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24) < 30;
  });

  const completedToday = state.progress.find(p => p.date === new Date().toISOString().slice(0, 10))?.completedGoalIds.length ?? 0;
  const completedWeek = last7.reduce((acc, cur) => acc + cur.completedGoalIds.length, 0);
  const completedMonth = last30.reduce((acc, cur) => acc + cur.completedGoalIds.length, 0);

  // Get goal names for a given day's completed IDs
  const getGoalNames = (completedIds: string[]) => {
    return completedIds.map(id => state.goals.find(g => g.id === id)?.title).filter(Boolean).join(', ');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progress</Text>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryText}>Completed today: <Text style={styles.highlight}>{completedToday}</Text></Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(completedToday / 3) * 100}%` }]} />
        </View>
        <Text style={styles.summaryText}>Completed this week: <Text style={styles.highlight}>{completedWeek}</Text></Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(completedWeek / 10) * 100}%` }]} />
        </View>
        <Text style={styles.summaryText}>Completed this month: <Text style={styles.highlight}>{completedMonth}</Text></Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(completedMonth / 20) * 100}%` }]} />
        </View>
      </View>

      <View style={styles.historySection}>
        <Text style={styles.sectionTitle}>History</Text>
        <FlatList
          data={state.progress.slice().reverse()}
          keyExtractor={p => p.date}
          renderItem={({ item }) => (
            <View style={styles.historyCard}>
              <Text style={styles.historyDate}>{item.date}</Text>
              <Text style={styles.historyCount}>completed {item.completedGoalIds.length} goals</Text>
              <Text style={styles.historyGoals}>{getGoalNames(item.completedGoalIds)}</Text>
            </View>
          )}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.emptyText}>No progress history yet!</Text>}
        />
      </View>
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
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
  },
  highlight: {
    color: '#2E8B57',
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2E8B57',
    borderRadius: 4,
  },
  historySection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  historyDate: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  historyCount: {
    fontSize: 16,
    color: '#34495e',
    fontWeight: '600',
    marginTop: 4,
  },
  historyGoals: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  list: {
    paddingBottom: 16,
  },
  emptyText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 16,
  },
});