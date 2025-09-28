// Path: CompanionPlusApp/screens/chat/EmergencyAlertScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const EmergencyAlertScreen = () => {
  const navigation = useNavigation();

  // Function to handle emergency alert
  const handleEmergencyAlert = () => {
    // Display a confirmation alert before sending the emergency signal
    Alert.alert(
      'Emergency Alert',
      'Are you sure you want to send an emergency alert?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Send Alert',
          onPress: () => {
            // In a real app, you would send the alert to the backend or a service
            Alert.alert('Emergency Alert Sent!', 'Your emergency alert has been sent.');
            // Navigate to another screen, if necessary
            // navigation.navigate('Home'); // Example: navigate to the Home screen after sending the alert
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Alert</Text>
      <Text style={styles.message}>In case of an emergency, click the button below to send an alert to your emergency contacts.</Text>

      <TouchableOpacity style={styles.alertButton} onPress={handleEmergencyAlert}>
        <Text style={styles.buttonText}>Send Emergency Alert</Text>
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
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  alertButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmergencyAlertScreen;
