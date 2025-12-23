
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
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import api from '../../utils/api';

// const AddEventScreen: React.FC = () => {
//   const [eventTitle, setEventTitle] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const navigation = useNavigation();

//   const handleSaveEvent = async () => {
//   if (!eventTitle || !eventDate) {
//     Alert.alert("Error", "Please fill in all fields");
//     return;
//   }

//   try {
//     const token = await AsyncStorage.getItem("token");

//     await api.post(
//       "/events",
//       { title: eventTitle, date: eventDate },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     Alert.alert("Event Saved", "Your event has been added.");
//     navigation.goBack();
//   } catch (error) {
//     Alert.alert("Error", "Failed to save event");
//   }
// };


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

//         <TouchableOpacity style={styles.button} onPress={handleSaveEvent}>
//           <Text style={styles.buttonText}>Save Event</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default AddEventScreen;

// /* STYLES SAME AS YOURS */


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
//     backgroundColor: '#635ed3ff',
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
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('token');

      await api.post(
        '/events',
        { title: eventTitle, date: eventDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Alert.alert('Event Saved', 'Your event has been added.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save event');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Add Event</Text>
        <Text style={styles.subTitle}>
          Keep track of important dates effortlessly
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.label}>Event Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Eg: Doctor Appointment"
          placeholderTextColor="#9CA3AF"
          value={eventTitle}
          onChangeText={setEventTitle}
        />

        <Text style={styles.label}>Event Date</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#9CA3AF"
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

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#b1c9e1ff', // 💜 Soft lavender background
    padding: 20,
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 24,
  },

  screenTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1E3A8A',
  },

  subTitle: {
    fontSize: 14,
    color: '#475569',
    marginTop: 6,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
    marginTop: 14,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: '#F8FAFC',
  },

  button: {
    marginTop: 32,
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#6366F1',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
});
