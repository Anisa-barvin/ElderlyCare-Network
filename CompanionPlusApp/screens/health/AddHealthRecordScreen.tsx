// Path: CompanionPlusApp/screens/health/AddHealthRecordScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddHealthRecordScreen = () => {
  const navigation = useNavigation();

  // State to hold the input values for health metrics
  const [bloodPressure, setBloodPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    if (!bloodPressure || !heartRate || !steps || !calories) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Here, you would typically send the data to your backend
    Alert.alert('Health Record Added', 'Your health record has been successfully saved.');
    // Navigate back to the health dashboard after adding the record
    navigation.navigate("HealthDashboardScreen" as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Health Record</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Blood Pressure (e.g. 120/80)"
        value={bloodPressure}
        onChangeText={setBloodPressure}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Heart Rate (bpm)"
        keyboardType="numeric"
        value={heartRate}
        onChangeText={setHeartRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Steps"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Calories Burned"
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Record</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
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

export default AddHealthRecordScreen;
