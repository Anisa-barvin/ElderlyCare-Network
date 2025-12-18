// // Path: CompanionPlusApp/screens/caregivers/RequestCaregiverScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { useNavigation  } from '@react-navigation/native';
// import {  StackNavigationProp } from '@react-navigation/stack';

// import { RootStackParamList } from '../../navigation/RootNavigator'; // Import RootStackParamList

// // Define the route prop type
// type RequestCaregiverScreenRouteProp = RouteProp<RootStackParamList, 'RequestCaregiver'>;

// const RequestCaregiverScreen = ({ route }: { route: RequestCaregiverScreenRouteProp }) => {
//   const { caregiverId } = route.params;
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

//   // State to hold the message and requested time
//   const [message, setMessage] = useState('');
//   const [time, setTime] = useState('');

//   // Handle form submission
//   const handleSubmit = () => {
//     if (!message || !time) {
//       Alert.alert('Error', 'Please provide both a message and a requested time.');
//       return;
//     }

//     // Simulate submitting the request (In real apps, make an API call)
//     Alert.alert('Request Submitted', `Your request for caregiver ID ${caregiverId} has been submitted.`);
    
//     // Navigate back to the previous screen after submission
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Request Caregiver</Text>
//       <Text style={styles.subtitle}>Caregiver ID: {caregiverId}</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter your request message"
//         value={message}
//         onChangeText={setMessage}
//         multiline
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Preferred time (e.g., 10:00 AM)"
//         value={time}
//         onChangeText={setTime}
//       />

//       <Button title="Submit Request" onPress={handleSubmit} color="#4CAF50" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f2f2f2',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#555',
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
// });

// export default RequestCaregiverScreen;




// // Path: CompanionPlusApp/screens/caregivers/RequestCaregiverScreen.tsx
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// // Route type
// type RequestCaregiverScreenRouteProp = RouteProp<
//   RootStackParamList,
//   'RequestCaregiver'
// >;

// const RequestCaregiverScreen = ({
//   route,
// }: {
//   route: RequestCaregiverScreenRouteProp;
// }) => {
//   const { caregiverId } = route.params;
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

//   const [message, setMessage] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = () => {
//     if (!message || !time) {
//       Alert.alert('Missing details', 'Please fill all fields.');
//       return;
//     }

//     Alert.alert(
//       'Request Sent ✅',
//       `Your request has been sent to the caregiver.`,
//       [{ text: 'OK', onPress: () => navigation.goBack() }]
//     );
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.screen}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <View style={styles.card}>
//         {/* Header */}
//         <Text style={styles.title}>Request Caregiver</Text>
//         <Text style={styles.subtitle}>
//           Caregiver ID: <Text style={styles.bold}>{caregiverId}</Text>
//         </Text>

//         {/* Message */}
//         <View style={styles.field}>
//           <Text style={styles.label}>Message</Text>
//           <TextInput
//             style={[styles.input, styles.textArea]}
//             placeholder="Describe your care needs..."
//             value={message}
//             onChangeText={setMessage}
//             multiline
//           />
//         </View>

//         {/* Time */}
//         <View style={styles.field}>
//           <Text style={styles.label}>Preferred Time</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ex: 10:00 AM - 1:00 PM"
//             value={time}
//             onChangeText={setTime}
//           />
//         </View>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Submit Request</Text>
//         </TouchableOpacity>

//         {/* Cancel */}
//         <TouchableOpacity
//           style={styles.cancelBtn}
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={styles.cancelText}>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default RequestCaregiverScreen;

// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//     justifyContent: 'center',
//     padding: 20,
//   },

//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 6 },
//     shadowRadius: 12,
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//     textAlign: 'center',
//     marginBottom: 6,
//   },

//   subtitle: {
//     fontSize: 14,
//     color: '#6B7280',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   bold: {
//     fontWeight: '700',
//     color: '#111827',
//   },

//   field: {
//     marginBottom: 16,
//   },

//   label: {
//     fontSize: 14,
//     color: '#374151',
//     marginBottom: 6,
//     fontWeight: '600',
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 10,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: '#F9FAFB',
//   },

//   textArea: {
//     height: 90,
//     textAlignVertical: 'top',
//   },

//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//     elevation: 4,
//   },

//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },

//   cancelBtn: {
//     marginTop: 12,
//     alignItems: 'center',
//   },

//   cancelText: {
//     color: '#6B7280',
//     fontSize: 15,
//     fontWeight: '600',
//   },
// });







// // Path: CompanionPlusApp/screens/caregivers/RequestCaregiverScreen.tsx
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// type RequestCaregiverScreenRouteProp = RouteProp<
//   RootStackParamList,
//   'RequestCaregiver'
// >;

// const RequestCaregiverScreen = ({
//   route,
// }: {
//   route: RequestCaregiverScreenRouteProp;
// }) => {
//   const { caregiverId,caregiverName } = route.params;
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

//   const [message, setMessage] = useState('');
//   const [time, setTime] = useState('');

//  const handleSubmit = async () => {
//   if (!message || !time) {
//     Alert.alert("Missing details", "Please fill all fields.");
//     return;
//   }

//   try {
//     const token = await AsyncStorage.getItem("token");

//     await api.post(
//       "/requests",
//       {
//         caregiverId,
//         message,
//         preferredTime: time,
//       },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     Alert.alert("Request Sent ✅", "Caregiver has been notified.");
//     navigation.goBack();

//   } catch (error) {
//     Alert.alert("Error", "Failed to send request.");
//   }
// };


//   return (
//     <KeyboardAvoidingView
//       style={styles.screen}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       {/* Sky Blue Background */}
//       <View style={styles.background} />

//       {/* Center Card */}
//       <View style={styles.card}>
//         <Text style={styles.title}>Request Caregiver</Text>

//         <Text style={styles.subtitle}>
//           Caregiver Name: <Text style={styles.bold}>{caregiverName}</Text>
//         </Text>

//         {/* Message */}
//         <View style={styles.field}>
//           <Text style={styles.label}>Message</Text>
//           <TextInput
//             style={[styles.input, styles.textArea]}
//             placeholder="Describe your care needs..."
//             placeholderTextColor="#94A3B8"
//             value={message}
//             onChangeText={setMessage}
//             multiline
//           />
//         </View>

//         {/* Time */}
//         <View style={styles.field}>
//           <Text style={styles.label}>Preferred Time</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Ex: 10:00 AM - 1:00 PM"
//             placeholderTextColor="#94A3B8"
//             value={time}
//             onChangeText={setTime}
//           />
//         </View>

//         {/* Submit */}
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Submit Request</Text>
//         </TouchableOpacity>

//         {/* Cancel */}
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.cancelText}>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default RequestCaregiverScreen;

// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   /* Light Sky Blue Background */
//   background: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: '#E0F2FE',
//   },

//   /* Compact Card */
//   card: {
//     width: '85%',          // 👈 not full width
//     maxWidth: 420,         // 👈 desktop/tablet safe
//     backgroundColor: '#FFFFFF',
//     borderRadius: 18,
//     padding: 22,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 0, height: 6 },
//     shadowRadius: 14,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0284C7',
//     textAlign: 'center',
//     marginBottom: 6,
//   },

//   subtitle: {
//     fontSize: 14,
//     color: '#64748B',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   bold: {
//     fontWeight: '700',
//     color: '#0F172A',
//   },

//   field: {
//     marginBottom: 16,
//   },

//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#334155',
//     marginBottom: 6,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#BAE6FD',
//     borderRadius: 10,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: '#F0F9FF',
//     color: '#0F172A',
//   },

//   textArea: {
//     height: 90,
//     textAlignVertical: 'top',
//   },

//   button: {
//     backgroundColor: '#0EA5E9',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//     shadowColor: '#0EA5E9',
//     shadowOpacity: 0.35,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 6,
//   },

//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   cancelText: {
//     marginTop: 14,
//     textAlign: 'center',
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#64748B',
//   },
// });





// Path: CompanionPlusApp/screens/caregivers/RequestCaregiverScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { RootStackParamList } from '../../navigation/RootNavigator';

type RequestCaregiverScreenRouteProp = RouteProp<
  RootStackParamList,
  'RequestCaregiver'
>;

const RequestCaregiverScreen = ({
  route,
}: {
  route: RequestCaregiverScreenRouteProp;
}) => {
  const { caregiverId, caregiverName } = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async () => {
    if (!message || !time) {
      Alert.alert('Missing details', 'Please fill all fields.');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('token');

      await api.post(
        '/requests',
        {
          caregiverId,
          message,
          preferredTime: time,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
console.log("Stored caregiverId:", caregiverId);

      Alert.alert('Request Sent ✅', 'Caregiver has been notified.');
      navigation.goBack();

    } catch (error) {
      console.log('Request Error:', error);
      Alert.alert('Error', 'Failed to send request.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.background} />

      <View style={styles.card}>
        <Text style={styles.title}>Request Caregiver</Text>

        <Text style={styles.subtitle}>
          Caregiver Name: <Text style={styles.bold}>{caregiverName}</Text>
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe your care needs..."
            value={message}
            onChangeText={setMessage}
            multiline
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Preferred Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 10:00 AM - 1:00 PM"
            value={time}
            onChangeText={setTime}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Request</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RequestCaregiverScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E0F2FE',
  },

  card: {
    width: '85%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    elevation: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0284C7',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 20,
  },

  bold: { fontWeight: '700', color: '#0F172A' },

  field: { marginBottom: 16 },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#BAE6FD',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F0F9FF',
  },

  textArea: { height: 90, textAlignVertical: 'top' },

  button: {
    backgroundColor: '#0EA5E9',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cancelText: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#64748B',
  },
});
