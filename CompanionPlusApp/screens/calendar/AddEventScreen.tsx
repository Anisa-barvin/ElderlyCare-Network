// Path: CompanionPlusApp/screens/calendar/AddEventScreen.tsx

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddEventScreen: React.FC = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const navigation = useNavigation();

  const handleSaveEvent = () => {
    if (!eventTitle || !eventDate) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // You can save this event data in a state or database here
    Alert.alert('Event Saved', `Title: ${eventTitle}\nDate: ${eventDate}`);
    // Navigate back after saving the event
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Event Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter event title"
        value={eventTitle}
        onChangeText={setEventTitle}
      />
      <Text style={styles.label}>Event Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter event date (YYYY-MM-DD)"
        value={eventDate}
        onChangeText={setEventDate}
      />
      <Button title="Save Event" onPress={handleSaveEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default AddEventScreen;
