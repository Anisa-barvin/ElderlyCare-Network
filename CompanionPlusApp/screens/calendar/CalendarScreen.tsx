// // Path: CompanionPlusApp/screens/calendar/CalendarScreen.tsx

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';

// interface Event {
//   id: string;
//   title: string;
//   date: string;
// }

// const CalendarScreen: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const navigation = useNavigation();

//   const handleDayPress = (day: any) => {
//     Alert.alert('Day Pressed', `You pressed day: ${day.dateString}`);
//   };

//   const handleAddEvent = () => {
//     navigation.navigate("AddEventScreen" as never);
//   };

//   const renderItem = ({ item }: { item: Event }) => (
//     <View style={styles.eventItem}>
//       <Text style={styles.eventTitle}>{item.title}</Text>
//       <Text style={styles.eventDate}>{item.date}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Calendar
//         onDayPress={handleDayPress}
//         monthFormat={'yyyy MM'}
//         hideExtraDays={true}
//         firstDay={1}
//         markedDates={{
//           '2025-04-25': { marked: true, dotColor: 'blue', activeOpacity: 0 },
//         }}
//       />
//       <FlatList
//         data={events}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         style={styles.eventList}
//       />
//       <Button title="Add Event" onPress={handleAddEvent} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9FAFB',
//   },
//   eventItem: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   eventTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   eventDate: {
//     fontSize: 14,
//     color: '#666',
//   },
//   eventList: {
//     marginTop: 20,
//   },
// });

// export default CalendarScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { useNavigation } from '@react-navigation/native';

// interface Event {
//   id: string;
//   title: string;
//   date: string;
// }

// const CalendarScreen: React.FC = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const navigation = useNavigation();

//   const handleDayPress = (day: any) => {
//     setSelectedDate(day.dateString);
//   };

//   const handleAddEvent = () => {
//     navigation.navigate('AddEventScreen' as never);
//   };

//   const renderItem = ({ item }: { item: Event }) => (
//     <View style={styles.eventCard}>
//       <Text style={styles.eventTitle}>{item.title}</Text>
//       <Text style={styles.eventDate}>{item.date}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.header}>📅 Event Calendar</Text>
//       <Text style={styles.subHeader}>Tap a date to view or create events</Text>

//       {/* Calendar Card */}
//       <View style={styles.calendarCard}>
//         <Calendar
//           onDayPress={handleDayPress}
//           markedDates={{
//             [selectedDate]: {
//               selected: true,
//               selectedColor: '#4F46E5',
//             },
//           }}
//           theme={{
//             todayTextColor: '#4F46E5',
//             selectedDayBackgroundColor: '#4F46E5',
//           }}
//         />
//       </View>

//       {/* Events Section */}
//       <Text style={styles.sectionTitle}>Your Events</Text>

//       {events.length === 0 ? (
//         <Text style={styles.noEventsText}>No events added yet.</Text>
//       ) : (
//         <FlatList
//           data={events}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//           style={styles.eventList}
//         />
//       )}

//       {/* Floating Add Event Button */}
//       <TouchableOpacity style={styles.fab} onPress={handleAddEvent}>
//         <Text style={styles.fabText}>＋</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CalendarScreen;

// /* ===================== STYLES ===================== */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F3F4F6',
//   },

//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#111827',
//   },

//   subHeader: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginBottom: 15,
//   },

//   calendarCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 10,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     marginBottom: 20,
//   },

//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#1F2937',
//     marginBottom: 10,
//   },

//   noEventsText: {
//     fontSize: 14,
//     color: '#6B7280',
//     textAlign: 'center',
//     marginTop: 20,
//   },

//   eventList: {
//     marginTop: 10,
//   },

//   eventCard: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     borderRadius: 8,
//     marginVertical: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     borderLeftWidth: 4,
//     borderLeftColor: '#4F46E5',
//   },

//   eventTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#111827',
//   },
//   eventDate: {
//     fontSize: 14,
//     color: '#6B7280',
//   },

//   fab: {
//     position: 'absolute',
//     bottom: 30,
//     right: 30,
//     backgroundColor: '#4F46E5',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 8,
//   },
//   fabText: {
//     color: '#FFFFFF',
//     fontSize: 32,
//     marginTop: -3,
//   },
// });







import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../../utils/api';
interface Event {
  _id: string;
  title: string;
  date: string;
}

const CalendarScreen: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
  const loadEvents = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const res = await api.get("/events", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEvents(res.data);
    } catch (error) {
      console.log("Event Fetch Error:", error);
    }
  };

  const unsubscribe = navigation.addListener("focus", loadEvents);
  return unsubscribe;
}, []);


  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const filteredEvents = events.filter(e => e.date === selectedDate);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📅 Event Calendar</Text>
      <Text style={styles.subHeader}>Tap a date to view events</Text>

      <View style={styles.calendarCard}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: '#4F46E5',
            },
          }}
        />
      </View>

      <Text style={styles.sectionTitle}>Events on {selectedDate || '...'}</Text>

      {filteredEvents.length === 0 ? (
        <Text style={styles.noEventsText}>No events for this date.</Text>
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.eventCard}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDate}>{item.date}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddEventScreen' as never)}
      >
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarScreen;

/* STYLES SAME AS YOURS */


/* ===================== STYLES ===================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },

  subHeader: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 15,
  },

  calendarCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 10,
  },

  noEventsText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 20,
  },

  eventList: {
    marginTop: 10,
  },

  eventCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#4F46E5',
  },

  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  eventDate: {
    fontSize: 14,
    color: '#6B7280',
  },

  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#4F46E5',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 32,
    marginTop: -3,
  },
});
