// Path: CompanionPlusApp/screens/health/HealthDashboardScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HealthDashboardScreen = () => {
  const navigation = useNavigation();

  // Static data for health metrics
  const healthData = {
    bloodPressure: '120/80 mmHg',
    heartRate: '72 bpm',
    steps: '10,245 steps',
    calories: '450 kcal',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Blood Pressure</Text>
        <Text style={styles.cardValue}>{healthData.bloodPressure}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Heart Rate</Text>
        <Text style={styles.cardValue}>{healthData.heartRate}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Steps</Text>
        <Text style={styles.cardValue}>{healthData.steps}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Calories Burned</Text>
        <Text style={styles.cardValue}>{healthData.calories}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddHealthRecordScreen" as never)}
      >
        <Text style={styles.buttonText}>Add Health Record</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ViewHealthHistoryScreen" as never)}
      >
        <Text style={styles.buttonText}>View Health History</Text>
      </TouchableOpacity>
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '100%',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HealthDashboardScreen;
