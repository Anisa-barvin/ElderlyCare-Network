// Path: CompanionPlusApp/screens/health/ViewHealthHistoryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const healthData = [
  { id: '1', date: '2025-04-10', bloodPressure: '120/80', heartRate: '72 bpm', steps: '7500', calories: '250' },
  { id: '2', date: '2025-04-09', bloodPressure: '125/82', heartRate: '75 bpm', steps: '6800', calories: '220' },
  { id: '3', date: '2025-04-08', bloodPressure: '118/79', heartRate: '70 bpm', steps: '8000', calories: '260' },
  { id: '4', date: '2025-04-07', bloodPressure: '122/80', heartRate: '71 bpm', steps: '7300', calories: '240' },
];

const ViewHealthHistoryScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.recordContainer}>
      <Text style={styles.recordDate}>{item.date}</Text>
      <Text style={styles.recordText}>Blood Pressure: {item.bloodPressure}</Text>
      <Text style={styles.recordText}>Heart Rate: {item.heartRate}</Text>
      <Text style={styles.recordText}>Steps: {item.steps}</Text>
      <Text style={styles.recordText}>Calories Burned: {item.calories}</Text>
      <TouchableOpacity
        style={styles.viewDetailsButton}
        onPress={() => navigation.navigate("HealthDashboardScreen" as never)}
      >
        <Text style={styles.viewDetailsText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health History</Text>
      <FlatList
        data={healthData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  recordContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  recordDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  recordText: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  viewDetailsButton: {
    marginTop: 15,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewHealthHistoryScreen;
