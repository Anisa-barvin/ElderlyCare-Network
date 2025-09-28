// Path: CompanionPlusApp/screens/emergency/SOSButtonScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import axios from '../../utils/api';

const SOSButtonScreen = () => {
  const [sending, setSending] = useState(false);

  const sendSOSAlert = async () => {
    try {
      setSending(true);

      // Request location permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to send an SOS alert.');
        setSending(false);
        return;
      }

      // Get current location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Send alert to the backend
      await axios.post('/sos/alert', {
        latitude,
        longitude,
      });

      Alert.alert('SOS Sent', 'Your emergency alert has been sent successfully.');
    } catch (error) {
      console.error('Error sending SOS:', error);
      Alert.alert('Error', 'Failed to send SOS alert.');
    } finally {
      setSending(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency SOS</Text>
      <Text style={styles.description}>
        If you are in danger or need immediate help, press the button below to send an emergency alert.
      </Text>
      <TouchableOpacity
        style={[styles.sosButton, sending && { backgroundColor: '#ccc' }]}
        onPress={sendSOSAlert}
        disabled={sending}
      >
        {sending ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.sosText}>Send SOS</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDED',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D00000',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  sosButton: {
    backgroundColor: '#D00000',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  sosText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SOSButtonScreen;
