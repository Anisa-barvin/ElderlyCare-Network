// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   SafeAreaView,
//   Alert,
//   ScrollView,
// } from 'react-native';

// const TransportRequestScreen = () => {
//   const [transportType, setTransportType] = useState('');
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = () => {
//     if (!transportType || !from || !to || !date || !time) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     // You can send this data to your backend here using Axios
//     Alert.alert('Request Submitted', 'Your transport request has been submitted.');

//     // Clear form after submission
//     setTransportType('');
//     setFrom('');
//     setTo('');
//     setDate('');
//     setTime('');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.header}>Transport Request</Text>

//         <TextInput
//           placeholder="Transport Type (e.g., Bus, Train, Taxi)"
//           value={transportType}
//           onChangeText={setTransportType}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="From"
//           value={from}
//           onChangeText={setFrom}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="To"
//           value={to}
//           onChangeText={setTo}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="Date (YYYY-MM-DD)"
//           value={date}
//           onChangeText={setDate}
//           style={styles.input}
//         />

//         <TextInput
//           placeholder="Time (e.g., 10:00 AM)"
//           value={time}
//           onChangeText={setTime}
//           style={styles.input}
//         />

//         <View style={styles.buttonContainer}>
//           <Button title="Submit Request" onPress={handleSubmit} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//   },
//   scrollContainer: {
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1f2937',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 12,
//     marginBottom: 15,
//     borderColor: '#d1d5db',
//     borderWidth: 1,
//     fontSize: 16,
//   },
//   buttonContainer: {
//     marginTop: 10,
//   },
// });

// export default TransportRequestScreen;









// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const TransportRequestScreen = () => {
//   const [transportType, setTransportType] = useState('');
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   const handleSubmit = () => {
//     if (!transportType || !from || !to || !date || !time) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     Alert.alert('Request Submitted', 'Your transport request has been submitted.');

//     setTransportType('');
//     setFrom('');
//     setTo('');
//     setDate('');
//     setTime('');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
        
//         {/* Header */}
//         <Text style={styles.header}>🚗 Transport Request</Text>

//         {/* Form Card */}
//         <View style={styles.card}>

//           <InputField
//             icon="car-outline"
//             placeholder="Transport Type (Bus, Train, Taxi)"
//             value={transportType}
//             onChangeText={setTransportType}
//           />

//           <InputField
//             icon="location-outline"
//             placeholder="From"
//             value={from}
//             onChangeText={setFrom}
//           />

//           <InputField
//             icon="navigate-outline"
//             placeholder="To"
//             value={to}
//             onChangeText={setTo}
//           />

//           <InputField
//             icon="calendar-outline"
//             placeholder="Date (YYYY-MM-DD)"
//             value={date}
//             onChangeText={setDate}
//           />

//           <InputField
//             icon="time-outline"
//             placeholder="Time (e.g., 10:00 AM)"
//             value={time}
//             onChangeText={setTime}
//           />

//           {/* Submit Button */}
//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>Submit Request</Text>
//           </TouchableOpacity>

//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// /* ------------------ Reusable Input Component ------------------ */

// const InputField = ({ icon, placeholder, value, onChangeText }) => (
//   <View style={styles.inputWrapper}>
//     <Ionicons name={icon} size={22} color="#4b5563" style={styles.inputIcon} />
//     <TextInput
//       placeholder={placeholder}
//       value={value}
//       onChangeText={onChangeText}
//       style={styles.input}
//       placeholderTextColor="#9ca3af"
//     />
//   </View>
// );

// /* ------------------ Styles ------------------ */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eef2ff',
//   },
//   scrollContainer: {
//     padding: 20,
//     alignItems: 'center',
//   },

//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1e3a8a',
//     marginBottom: 20,
//   },

//   card: {
//     width: '100%',
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//   },

//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f9fafb',
//     borderColor: '#d1d5db',
//     borderWidth: 1,
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     marginBottom: 15,
//   },

//   inputIcon: {
//     marginRight: 10,
//   },

//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#111827',
//   },

//   button: {
//     backgroundColor: '#2563eb',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   buttonText: {
//     color: 'white',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
// });

// export default TransportRequestScreen;










import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

    Alert.alert('Request Submitted', 'Your transport request has been submitted.');

    setTransportType('');
    setFrom('');
    setTo('');
    setDate('');
    setTime('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Header */}
        <View style={styles.headerBox}>
          <Ionicons name="car-outline" size={40} color="#3B82F6" />
          <Text style={styles.headerText}>Transport Request</Text>
          <Text style={styles.subText}>Submit your travel details below</Text>
        </View>

        {/* Form Card */}
        <View style={styles.card}>

          {/* Field */}
          <View style={styles.inputBox}>
            <Ionicons name="bus-outline" size={20} color="#6B7280" style={styles.icon} />
            <TextInput
              placeholder="Transport Type (Bus, Train, Taxi)"
              value={transportType}
              onChangeText={setTransportType}
              style={styles.input}
            />
          </View>

          <View style={styles.inputBox}>
            <Ionicons name="location-outline" size={20} color="#6B7280" style={styles.icon} />
            <TextInput
              placeholder="From"
              value={from}
              onChangeText={setFrom}
              style={styles.input}
            />
          </View>

          <View style={styles.inputBox}>
            <Ionicons name="flag-outline" size={20} color="#6B7280" style={styles.icon} />
            <TextInput
              placeholder="To"
              value={to}
              onChangeText={setTo}
              style={styles.input}
            />
          </View>

          <View style={styles.inputBox}>
            <Ionicons name="calendar-outline" size={20} color="#6B7280" style={styles.icon} />
            <TextInput
              placeholder="Date (YYYY-MM-DD)"
              value={date}
              onChangeText={setDate}
              style={styles.input}
            />
          </View>

          <View style={styles.inputBox}>
            <Ionicons name="time-outline" size={20} color="#6B7280" style={styles.icon} />
            <TextInput
              placeholder="Time (10:00 AM)"
              value={time}
              onChangeText={setTime}
              style={styles.input}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Ionicons name="send-outline" size={20} color="white" />
            <Text style={styles.submitText}>Submit Request</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransportRequestScreen;

/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
  },

  scroll: {
    padding: 20,
    alignItems: 'center',
  },

  // Header Section
  headerBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#1E3A8A',
  },
  subText: {
    fontSize: 14,
    marginTop: 4,
    color: '#6B7280',
  },

  // Card Style
  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  // Input + Icon
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },

  // Button
  submitBtn: {
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});
