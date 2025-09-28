import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';

const TransportRequestScreen = () => {
  const [transportType, setTransportType] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (!transportType || !from || !to || !date || !time) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // You can send this data to your backend here using Axios
    Alert.alert('Request Submitted', 'Your transport request has been submitted.');

    // Clear form after submission
    setTransportType('');
    setFrom('');
    setTo('');
    setDate('');
    setTime('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Transport Request</Text>

        <TextInput
          placeholder="Transport Type (e.g., Bus, Train, Taxi)"
          value={transportType}
          onChangeText={setTransportType}
          style={styles.input}
        />

        <TextInput
          placeholder="From"
          value={from}
          onChangeText={setFrom}
          style={styles.input}
        />

        <TextInput
          placeholder="To"
          value={to}
          onChangeText={setTo}
          style={styles.input}
        />

        <TextInput
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />

        <TextInput
          placeholder="Time (e.g., 10:00 AM)"
          value={time}
          onChangeText={setTime}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <Button title="Submit Request" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderColor: '#d1d5db',
    borderWidth: 1,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default TransportRequestScreen;
