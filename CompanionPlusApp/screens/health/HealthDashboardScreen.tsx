// // Path: CompanionPlusApp/screens/health/HealthDashboardScreen.tsx

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const HealthDashboardScreen = () => {
//   const navigation = useNavigation();

//   // Static data for health metrics
//   const healthData = {
//     bloodPressure: '120/80 mmHg',
//     heartRate: '72 bpm',
//     steps: '10,245 steps',
//     calories: '450 kcal',
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Health Dashboard</Text>

//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Blood Pressure</Text>
//         <Text style={styles.cardValue}>{healthData.bloodPressure}</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Heart Rate</Text>
//         <Text style={styles.cardValue}>{healthData.heartRate}</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Steps</Text>
//         <Text style={styles.cardValue}>{healthData.steps}</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Calories Burned</Text>
//         <Text style={styles.cardValue}>{healthData.calories}</Text>
//       </View>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("AddHealthRecordScreen" as never)}
//       >
//         <Text style={styles.buttonText}>Add Health Record</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("ViewHealthHistoryScreen" as never)}
//       >
//         <Text style={styles.buttonText}>View Health History</Text>
//       </TouchableOpacity>
//     </ScrollView>

    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     width: '100%',
//     marginBottom: 15,
//   },
//   cardTitle: {
//     fontSize: 18,
//     color: '#888',
//     marginBottom: 10,
//   },
//   cardValue: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
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

// export default HealthDashboardScreen;






// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const HealthDashboardScreen = () => {
//   const navigation = useNavigation();

//   const healthData = {
//     bloodPressure: '120/80 mmHg',
//     heartRate: '72 bpm',
//     steps: '10,245 steps',
//     calories: '450 kcal',
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Health Dashboard</Text>

//       {/* BLOOD PRESSURE */}
//       <View style={[styles.card, styles.redCard]}>
//         <View style={styles.iconCircle}>
//           <Ionicons name="heart-circle" size={40} color="#d32f2f" />
//         </View>
//         <View>
//           <Text style={styles.cardTitle}>Blood Pressure</Text>
//           <Text style={styles.cardValue}>{healthData.bloodPressure}</Text>
//         </View>
//       </View>

//       {/* HEART RATE */}
//       <View style={[styles.card, styles.blueCard]}>
//         <View style={styles.iconCircle}>
//           <Ionicons name="pulse-outline" size={40} color="#1976d2" />
//         </View>
//         <View>
//           <Text style={styles.cardTitle}>Heart Rate</Text>
//           <Text style={styles.cardValue}>{healthData.heartRate}</Text>
//         </View>
//       </View>

//       {/* STEPS */}
//       <View style={[styles.card, styles.greenCard]}>
//         <View style={styles.iconCircle}>
//           <Ionicons name="walk-outline" size={40} color="#388e3c" />
//         </View>
//         <View>
//           <Text style={styles.cardTitle}>Steps</Text>
//           <Text style={styles.cardValue}>{healthData.steps}</Text>
//         </View>
//       </View>

//       {/* CALORIES */}
//       <View style={[styles.card, styles.orangeCard]}>
//         <View style={styles.iconCircle}>
//           <Ionicons name="flame-outline" size={40} color="#f57c00" />
//         </View>
//         <View>
//           <Text style={styles.cardTitle}>Calories Burned</Text>
//           <Text style={styles.cardValue}>{healthData.calories}</Text>
//         </View>
//       </View>

//       {/* BUTTONS */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('AddHealthRecordScreen' as never)}
//       >
//         <Ionicons name="add-circle-outline" size={22} color="#fff" />
//         <Text style={styles.buttonText}>Add Health Record</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[styles.button, styles.secondaryButton]}
//         onPress={() => navigation.navigate('ViewHealthHistoryScreen' as never)}
//       >
//         <Ionicons name="time-outline" size={22} color="#fff" />
//         <Text style={styles.buttonText}>View Health History</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default HealthDashboardScreen;

// /* -------------------- STYLES -------------------- */

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#F1F5F9',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#1e293b',
//     marginBottom: 25,
//   },

//   /* CARD BASE STYLE */
//   card: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 18,
//     borderRadius: 14,
//     marginBottom: 18,
//     elevation: 4,
//   },

//   iconCircle: {
//     width: 55,
//     height: 55,
//     borderRadius: 27,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 18,
//   },

//   /* CARD COLORS */
//   redCard: {
//     backgroundColor: '#ffebee',
//   },
//   blueCard: {
//     backgroundColor: '#e3f2fd',
//   },
//   greenCard: {
//     backgroundColor: '#e8f5e9',
//   },
//   orangeCard: {
//     backgroundColor: '#fff3e0',
//   },

//   cardTitle: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 5,
//   },

//   cardValue: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#222',
//   },

//   /* BUTTONS */
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 10,
//     marginTop: 20,
//     width: '100%',
//     justifyContent: 'center',
//     elevation: 3,
//   },

//   secondaryButton: {
//     backgroundColor: '#6C63FF',
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     marginLeft: 10,
//   },
// });














// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const HealthDashboardScreen = () => {
//   const navigation = useNavigation();
//   const [latest, setLatest] = useState<any>(null);

//   useEffect(() => {
//     const loadLatest = async () => {
//       const data = await AsyncStorage.getItem("healthRecords");
//       if (data) setLatest(JSON.parse(data)[0]);
//     };
//     const unsubscribe = navigation.addListener('focus', loadLatest);
//     return unsubscribe;
//   }, []);

//   if (!latest) {
//     return <Text style={{ textAlign: 'center', marginTop: 40 }}>No health records yet</Text>;
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Health Dashboard</Text>

//       {[
//         { label: "Blood Pressure", value: latest.bloodPressure, icon: "heart-circle" },
//         { label: "Heart Rate", value: latest.heartRate, icon: "pulse-outline" },
//         { label: "Steps", value: latest.steps, icon: "walk-outline" },
//         { label: "Calories", value: `${latest.calories} kcal`, icon: "flame-outline" }
//       ].map((item, i) => (
//         <View key={i} style={styles.card}>
//           <Ionicons name={item.icon as any} size={40} />
//           <View>
//             <Text>{item.label}</Text>
//             <Text style={styles.value}>{item.value}</Text>
//           </View>
//         </View>
//       ))}

//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddHealthRecordScreen' as never)}>
//         <Text style={styles.buttonText}>Add Health Record</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.button, styles.secondary]} onPress={() => navigation.navigate('ViewHealthHistoryScreen' as never)}>
//         <Text style={styles.buttonText}>View Health History</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default HealthDashboardScreen;


// /* -------------------- STYLES -------------------- */

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#F1F5F9',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#1e293b',
//     marginBottom: 25,
//   },

//   /* CARD BASE STYLE */
//   card: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 18,
//     borderRadius: 14,
//     marginBottom: 18,
//     elevation: 4,
//   },

//   iconCircle: {
//     width: 55,
//     height: 55,
//     borderRadius: 27,
//     backgroundColor: '#ffffff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 18,
//   },

//   /* CARD COLORS */
//   redCard: {
//     backgroundColor: '#ffebee',
//   },
//   blueCard: {
//     backgroundColor: '#e3f2fd',
//   },
//   greenCard: {
//     backgroundColor: '#e8f5e9',
//   },
//   orangeCard: {
//     backgroundColor: '#fff3e0',
//   },

//   cardTitle: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 5,
//   },

//   cardValue: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#222',
//   },

//   /* BUTTONS */
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 10,
//     marginTop: 20,
//     width: '100%',
//     justifyContent: 'center',
//     elevation: 3,
//   },

//   secondaryButton: {
//     backgroundColor: '#6C63FF',
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     marginLeft: 10,
//   },
// });



import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../utils/api';
const HealthDashboardScreen = () => {
  const navigation = useNavigation();
  const [latest, setLatest] = useState<any>(null);

 useEffect(() => {
  const loadLatest = async () => {
    const token = await AsyncStorage.getItem("token");

    const res = await api.get("/health/latest", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setLatest(res.data);
  };

  const unsub = navigation.addListener("focus", loadLatest);
  return unsub;
}, []);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Health Dashboard</Text>

      {/* ===== NO RECORD STATE ===== */}
      {!latest && (
        <View style={styles.emptyBox}>
          <Ionicons name="alert-circle-outline" size={50} color="#94A3B8" />
          <Text style={styles.emptyText}>No health records yet</Text>
        </View>
      )}

      {/* ===== LATEST RECORD ===== */}
      {latest && (
        <>
          <View style={styles.card}>
            <Ionicons name="heart-circle" size={40} color="#ef4444" />
            <View>
              <Text style={styles.label}>Blood Pressure</Text>
              <Text style={styles.value}>{latest.bloodPressure}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Ionicons name="pulse-outline" size={40} color="#2563eb" />
            <View>
              <Text style={styles.label}>Heart Rate</Text>
              <Text style={styles.value}>{latest.heartRate}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Ionicons name="walk-outline" size={40} color="#16a34a" />
            <View>
              <Text style={styles.label}>Steps</Text>
              <Text style={styles.value}>{latest.steps}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Ionicons name="flame-outline" size={40} color="#f97316" />
            <View>
              <Text style={styles.label}>Calories</Text>
              <Text style={styles.value}>{latest.calories} kcal</Text>
            </View>
          </View>
        </>
      )}

      {/* ===== ACTION BUTTONS (ALWAYS VISIBLE) ===== */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddHealthRecordScreen' as never)}
      >
        <Ionicons name="add-circle-outline" size={22} color="#fff" />
        <Text style={styles.buttonText}>Add Health Record</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('ViewHealthHistoryScreen' as never)}
      >
        <Ionicons name="time-outline" size={22} color="#fff" />
        <Text style={styles.buttonText}>View Health History</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HealthDashboardScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },

  emptyBox: {
    alignItems: 'center',
    marginVertical: 40,
  },

  emptyText: {
    fontSize: 18,
    color: '#64748B',
    marginTop: 10,
  },

  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    elevation: 3,
  },

  label: {
    fontSize: 15,
    color: '#64748B',
  },

  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },

  secondaryButton: {
    backgroundColor: '#6366f1',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});
