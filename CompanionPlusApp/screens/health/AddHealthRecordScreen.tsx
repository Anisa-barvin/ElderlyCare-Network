// // Path: CompanionPlusApp/screens/health/AddHealthRecordScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const AddHealthRecordScreen = () => {
//   const navigation = useNavigation();

//   // State to hold the input values for health metrics
//   const [bloodPressure, setBloodPressure] = useState('');
//   const [heartRate, setHeartRate] = useState('');
//   const [steps, setSteps] = useState('');
//   const [calories, setCalories] = useState('');

//   // Function to handle form submission
//   const handleSubmit = () => {
//     if (!bloodPressure || !heartRate || !steps || !calories) {
//       Alert.alert('Please fill in all fields');
//       return;
//     }

//     // Here, you would typically send the data to your backend
//     Alert.alert('Health Record Added', 'Your health record has been successfully saved.');
//     // Navigate back to the health dashboard after adding the record
//     navigation.navigate("HealthDashboardScreen" as never);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Health Record</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Blood Pressure (e.g. 120/80)"
//         value={bloodPressure}
//         onChangeText={setBloodPressure}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Heart Rate (bpm)"
//         keyboardType="numeric"
//         value={heartRate}
//         onChangeText={setHeartRate}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Steps"
//         keyboardType="numeric"
//         value={steps}
//         onChangeText={setSteps}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Calories Burned"
//         keyboardType="numeric"
//         value={calories}
//         onChangeText={setCalories}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Save Record</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: 15,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginTop: 20,
//     elevation: 3,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AddHealthRecordScreen;






// // Path: CompanionPlusApp/screens/health/AddHealthRecordScreen.tsx
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

// const AddHealthRecordScreen = () => {
//   const navigation = useNavigation();

//   const [bloodPressure, setBloodPressure] = useState('');
//   const [heartRate, setHeartRate] = useState('');
//   const [steps, setSteps] = useState('');
//   const [calories, setCalories] = useState('');

//   const handleSubmit = () => {
//     if (!bloodPressure || !heartRate || !steps || !calories) {
//       Alert.alert('Missing Fields', 'Please fill in all fields');
//       return;
//     }

//     Alert.alert('Success', 'Health record saved successfully!');
//     navigation.navigate('HealthDashboard' as never);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Add Health Record</Text>

//       <View style={styles.card}>
//         {/* Blood Pressure */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Blood Pressure</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="e.g. 120/80"
//             value={bloodPressure}
//             onChangeText={setBloodPressure}
//           />
//         </View>

//         {/* Heart Rate */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Heart Rate (bpm)</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter heart rate"
//             keyboardType="numeric"
//             value={heartRate}
//             onChangeText={setHeartRate}
//           />
//         </View>

//         {/* Steps */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Steps</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Total steps"
//             keyboardType="numeric"
//             value={steps}
//             onChangeText={setSteps}
//           />
//         </View>

//         {/* Calories */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Calories Burned</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Total calories burned"
//             keyboardType="numeric"
//             value={calories}
//             onChangeText={setCalories}
//           />
//         </View>

//         {/* Button */}
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Save Health Record</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default AddHealthRecordScreen;

// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F3F4F6',
//     padding: 20,
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 20,
//   },

//   card: {
//     width: '100%',
//     maxWidth: 600,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 18,
//     padding: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },

//   inputGroup: {
//     marginBottom: 18,
//   },

//   label: {
//     fontSize: 16,
//     color: '#4B5563',
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

//   button: {
//     backgroundColor: '#10B981',
//     paddingVertical: 14,
//     borderRadius: 12,
//     marginTop: 25,
//     alignItems: 'center',
//     shadowColor: '#10B981',
//     shadowOpacity: 0.4,
//     shadowRadius: 6,
//   },

//   buttonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
// });





// // Path: CompanionPlusApp/screens/health/AddHealthRecordScreen.tsx

// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, StyleSheet,
//   TouchableOpacity, Alert, ScrollView
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

// const AddHealthRecordScreen = () => {
//   const navigation = useNavigation();

//   const [bloodPressure, setBloodPressure] = useState('');
//   const [heartRate, setHeartRate] = useState('');
//   const [steps, setSteps] = useState('');
//   const [calories, setCalories] = useState('');

//   const handleSubmit = async () => {
//     if (!bloodPressure || !heartRate || !steps || !calories) {
//       Alert.alert('Missing Fields', 'Please fill all fields');
//       return;
//     }

//     const newRecord = {
//       id: Date.now().toString(),
//       date: new Date().toISOString().split('T')[0],
//       bloodPressure,
//       heartRate: `${heartRate} bpm`,
//       steps,
//       calories,
//     };

//     const stored = await AsyncStorage.getItem("healthRecords");
//     const records = stored ? JSON.parse(stored) : [];

//     records.unshift(newRecord); // latest first
//     await AsyncStorage.setItem("healthRecords", JSON.stringify(records));

//     Alert.alert("Success", "Health record saved!");
//     navigation.navigate('HealthDashboard' as never);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Add Health Record</Text>

//       <View style={styles.card}>
//         <TextInput style={styles.input} placeholder="Blood Pressure (120/80)" value={bloodPressure} onChangeText={setBloodPressure}/>
//         <TextInput style={styles.input} placeholder="Heart Rate" keyboardType="numeric" value={heartRate} onChangeText={setHeartRate}/>
//         <TextInput style={styles.input} placeholder="Steps" keyboardType="numeric" value={steps} onChangeText={setSteps}/>
//         <TextInput style={styles.input} placeholder="Calories Burned" keyboardType="numeric" value={calories} onChangeText={setCalories}/>

//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Save Health Record</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default AddHealthRecordScreen;


// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#F3F4F6',
//     padding: 20,
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 20,
//   },

//   card: {
//     width: '100%',
//     maxWidth: 600,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 18,
//     padding: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },

//   inputGroup: {
//     marginBottom: 18,
//   },

//   label: {
//     fontSize: 16,
//     color: '#4B5563',
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

//   button: {
//     backgroundColor: '#10B981',
//     paddingVertical: 14,
//     borderRadius: 12,
//     marginTop: 25,
//     alignItems: 'center',
//     shadowColor: '#10B981',
//     shadowOpacity: 0.4,
//     shadowRadius: 6,
//   },

//   buttonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
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
import { Ionicons } from '@expo/vector-icons';
import api from '../../utils/api';
const AddHealthRecordScreen = () => {
  const navigation = useNavigation();

  const [bloodPressure, setBloodPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = async () => {
  const token = await AsyncStorage.getItem("token");

  await api.post(
    "/health",
    {
      bloodPressure,
      heartRate,
      steps,
      calories,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  Alert.alert("Success", "Health record saved!");
  navigation.navigate("HealthDashboard" as never);
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Health Record</Text>
      <Text style={styles.subtitle}>Track your daily health stats</Text>

      {/* FORM CARD */}
      <View style={styles.card}>

        {/* BLOOD PRESSURE */}
        <View style={styles.inputGroup}>
          <Ionicons name="heart-circle" size={24} color="#ef4444" />
          <TextInput
            style={styles.input}
            placeholder="Blood Pressure (120/80)"
            value={bloodPressure}
            onChangeText={setBloodPressure}
          />
        </View>

        {/* HEART RATE */}
        <View style={styles.inputGroup}>
          <Ionicons name="pulse-outline" size={24} color="#2563eb" />
          <TextInput
            style={styles.input}
            placeholder="Heart Rate (bpm)"
            keyboardType="numeric"
            value={heartRate}
            onChangeText={setHeartRate}
          />
        </View>

        {/* STEPS */}
        <View style={styles.inputGroup}>
          <Ionicons name="walk-outline" size={24} color="#16a34a" />
          <TextInput
            style={styles.input}
            placeholder="Steps Count"
            keyboardType="numeric"
            value={steps}
            onChangeText={setSteps}
          />
        </View>

        {/* CALORIES */}
        <View style={styles.inputGroup}>
          <Ionicons name="flame-outline" size={24} color="#f97316" />
          <TextInput
            style={styles.input}
            placeholder="Calories Burned"
            keyboardType="numeric"
            value={calories}
            onChangeText={setCalories}
          />
        </View>

        {/* LIVE PREVIEW */}
        {(bloodPressure || heartRate || steps || calories) && (
          <View style={styles.previewBox}>
            <Text style={styles.previewTitle}>Preview</Text>
            <Text style={styles.previewText}>💓 BP: {bloodPressure || '--'}</Text>
            <Text style={styles.previewText}>❤️ HR: {heartRate || '--'} bpm</Text>
            <Text style={styles.previewText}>👣 Steps: {steps || '--'}</Text>
            <Text style={styles.previewText}>🔥 Calories: {calories || '--'}</Text>
          </View>
        )}

        {/* SAVE BUTTON */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Ionicons name="save-outline" size={22} color="#fff" />
          <Text style={styles.buttonText}>Save Health Record</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddHealthRecordScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#b1c9e1ff',
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 6,
  },

  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },

  previewBox: {
    backgroundColor: '#ECFEFF',
    borderRadius: 12,
    padding: 14,
    marginTop: 10,
  },

  previewTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#0f766e',
  },

  previewText: {
    fontSize: 15,
    color: '#134e4a',
    marginVertical: 2,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
