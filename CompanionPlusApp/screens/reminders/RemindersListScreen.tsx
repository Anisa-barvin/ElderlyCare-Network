// Path: CompanionPlusApp/screens/reminders/RemindersListScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Reminder = {
  id: string;
  time: string;
  message: string;
};

const RemindersListScreen = () => {
  const navigation = useNavigation();
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: '1', time: '08:00 AM', message: 'Take morning medicine' },
    { id: '2', time: '12:00 PM', message: 'Eat lunch' },
    { id: '3', time: '06:00 PM', message: 'Evening walk' },
  ]);

  const renderReminder = ({ item }: { item: Reminder }) => (
    <View style={styles.reminderCard}>
      <Text style={styles.reminderTime}>{item.time}</Text>
      <Text style={styles.reminderMessage}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Reminders</Text>
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={renderReminder}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddReminderScreen' as never)}
      >
        <Text style={styles.addButtonText}>+ Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  listContent: {
    paddingBottom: 100,
  },
  reminderCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  reminderTime: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: '600',
  },
  reminderMessage: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RemindersListScreen;
