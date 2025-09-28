// Path: CompanionPlusApp/screens/calendar/CalendarScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

interface Event {
  id: string;
  title: string;
  date: string;
}

const CalendarScreen: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigation = useNavigation();

  const handleDayPress = (day: any) => {
    Alert.alert('Day Pressed', `You pressed day: ${day.dateString}`);
  };

  const handleAddEvent = () => {
    navigation.navigate("AddEventScreen" as never);
  };

  const renderItem = ({ item }: { item: Event }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        firstDay={1}
        markedDates={{
          '2025-04-25': { marked: true, dotColor: 'blue', activeOpacity: 0 },
        }}
      />
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.eventList}
      />
      <Button title="Add Event" onPress={handleAddEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  eventItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
  },
  eventList: {
    marginTop: 20,
  },
});

export default CalendarScreen;
