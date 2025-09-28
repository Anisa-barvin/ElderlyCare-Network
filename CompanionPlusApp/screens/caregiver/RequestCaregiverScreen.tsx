// Path: CompanionPlusApp/screens/caregivers/RequestCaregiverScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useNavigation  } from '@react-navigation/native';
import {  StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../navigation/RootNavigator'; // Import RootStackParamList

// Define the route prop type
type RequestCaregiverScreenRouteProp = RouteProp<RootStackParamList, 'RequestCaregiver'>;

const RequestCaregiverScreen = ({ route }: { route: RequestCaregiverScreenRouteProp }) => {
  const { caregiverId } = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // State to hold the message and requested time
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!message || !time) {
      Alert.alert('Error', 'Please provide both a message and a requested time.');
      return;
    }

    // Simulate submitting the request (In real apps, make an API call)
    Alert.alert('Request Submitted', `Your request for caregiver ID ${caregiverId} has been submitted.`);
    
    // Navigate back to the previous screen after submission
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Caregiver</Text>
      <Text style={styles.subtitle}>Caregiver ID: {caregiverId}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your request message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Preferred time (e.g., 10:00 AM)"
        value={time}
        onChangeText={setTime}
      />

      <Button title="Submit Request" onPress={handleSubmit} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default RequestCaregiverScreen;
