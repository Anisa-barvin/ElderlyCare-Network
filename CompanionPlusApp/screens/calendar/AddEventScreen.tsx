// // Path: CompanionPlusApp/screens/calendar/AddEventScreen.tsx

// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const AddEventScreen: React.FC = () => {
//   const [eventTitle, setEventTitle] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const navigation = useNavigation();

//   const handleSaveEvent = () => {
//     if (!eventTitle || !eventDate) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     // You can save this event data in a state or database here
//     Alert.alert('Event Saved', `Title: ${eventTitle}\nDate: ${eventDate}`);
//     // Navigate back after saving the event
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Event Title:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter event title"
//         value={eventTitle}
//         onChangeText={setEventTitle}
//       />
//       <Text style={styles.label}>Event Date:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter event date (YYYY-MM-DD)"
//         value={eventDate}
//         onChangeText={setEventDate}
//       />
//       <Button title="Save Event" onPress={handleSaveEvent} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9FAFB',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 20,
//   },
// });

// export default AddEventScreen;






// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const AddEventScreen: React.FC = () => {
//   const [eventTitle, setEventTitle] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const navigation = useNavigation();

//   const handleSaveEvent = () => {
//     if (!eventTitle || !eventDate) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     Alert.alert('Event Saved', `Title: ${eventTitle}\nDate: ${eventDate}`);
//     navigation.goBack();
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.screenTitle}>Add New Event</Text>

//       <View style={styles.card}>
//         <Text style={styles.label}>Event Title</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter event title"
//           value={eventTitle}
//           onChangeText={setEventTitle}
//         />

//         <Text style={styles.label}>Event Date</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="YYYY-MM-DD"
//           value={eventDate}
//           onChangeText={setEventDate}
//         />

//         {/* Save Button */}
//         <TouchableOpacity style={styles.button} onPress={handleSaveEvent}>
//           <Text style={styles.buttonText}>Save Event</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default AddEventScreen;

// /* ===================== STYLES ===================== */

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 24,
//     backgroundColor: '#F3F4F6',
//     alignItems: 'center',
//   },

//   screenTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 20,
//   },

//   card: {
//     width: '100%',
//     maxWidth: 600,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 20,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 3 },
//   },

//   label: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#374151',
//     marginBottom: 8,
//     marginTop: 12,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 10,
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//     backgroundColor: '#FFFFFF',
//     fontSize: 16,
//   },

//   button: {
//     marginTop: 30,
//     backgroundColor: '#4F46E5',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//   },

//   buttonText: {
//     color: 'white',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
// });






import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../../utils/api';

const AddEventScreen: React.FC = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const navigation = useNavigation();

  const handleSaveEvent = async () => {
  if (!eventTitle || !eventDate) {
    Alert.alert("Error", "Please fill in all fields");
    return;
  }

  try {
    const token = await AsyncStorage.getItem("token");

    await api.post(
      "/events",
      { title: eventTitle, date: eventDate },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    Alert.alert("Event Saved", "Your event has been added.");
    navigation.goBack();
  } catch (error) {
    Alert.alert("Error", "Failed to save event");
  }
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.screenTitle}>Add New Event</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Event Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event title"
          value={eventTitle}
          onChangeText={setEventTitle}
        />

        <Text style={styles.label}>Event Date</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={eventDate}
          onChangeText={setEventDate}
        />

        <TouchableOpacity style={styles.button} onPress={handleSaveEvent}>
          <Text style={styles.buttonText}>Save Event</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddEventScreen;

/* STYLES SAME AS YOURS */


/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
