// // Path: CompanionPlusApp/screens/health/ViewHealthHistoryScreen.tsx
// import React from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const healthData = [
//   { id: '1', date: '2025-04-10', bloodPressure: '120/80', heartRate: '72 bpm', steps: '7500', calories: '250' },
//   { id: '2', date: '2025-04-09', bloodPressure: '125/82', heartRate: '75 bpm', steps: '6800', calories: '220' },
//   { id: '3', date: '2025-04-08', bloodPressure: '118/79', heartRate: '70 bpm', steps: '8000', calories: '260' },
//   { id: '4', date: '2025-04-07', bloodPressure: '122/80', heartRate: '71 bpm', steps: '7300', calories: '240' },
// ];

// const ViewHealthHistoryScreen = () => {
//   const navigation = useNavigation();

//   const renderItem = ({ item }: { item: any }) => (
//     <View style={styles.recordContainer}>
//       <Text style={styles.recordDate}>{item.date}</Text>
//       <Text style={styles.recordText}>Blood Pressure: {item.bloodPressure}</Text>
//       <Text style={styles.recordText}>Heart Rate: {item.heartRate}</Text>
//       <Text style={styles.recordText}>Steps: {item.steps}</Text>
//       <Text style={styles.recordText}>Calories Burned: {item.calories}</Text>
//       <TouchableOpacity
//         style={styles.viewDetailsButton}
//         onPress={() => navigation.navigate("HealthDashboardScreen" as never)}
//       >
//         <Text style={styles.viewDetailsText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Health History</Text>
//       <FlatList
//         data={healthData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   recordContainer: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   recordDate: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },
//   recordText: {
//     fontSize: 16,
//     color: '#555',
//     marginTop: 5,
//   },
//   viewDetailsButton: {
//     marginTop: 15,
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   viewDetailsText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ViewHealthHistoryScreen;




// // Path: CompanionPlusApp/screens/health/ViewHealthHistoryScreen.tsx

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const healthData = [
//   { id: '1', date: '2025-04-10', bloodPressure: '120/80', heartRate: '72 bpm', steps: '7500', calories: '250' },
//   { id: '2', date: '2025-04-09', bloodPressure: '125/82', heartRate: '75 bpm', steps: '6800', calories: '220' },
// ];

// const ViewHealthHistoryScreen = () => {
//   const navigation = useNavigation();
//   const fadeAnim = new Animated.Value(0);

//   React.useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 700,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const renderItem = ({ item }: { item: any }) => (
//     <Animated.View style={[styles.recordContainer, { opacity: fadeAnim }]}>
//       <View style={styles.dateBadge}>
//         <Text style={styles.dateText}>{item.date}</Text>
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.label}>💓 Blood Pressure:</Text>
//         <Text style={styles.value}>{item.bloodPressure}</Text>
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.label}>❤️ Heart Rate:</Text>
//         <Text style={styles.value}>{item.heartRate}</Text>
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.label}>👣 Steps:</Text>
//         <Text style={styles.value}>{item.steps}</Text>
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.label}>🔥 Calories:</Text>
//         <Text style={styles.value}>{item.calories}</Text>
//       </View>

//       <TouchableOpacity
//         style={styles.viewDetailsButton}
//         onPress={() => navigation.navigate('HealthDashboard' as never)}
//       >
//         <Text style={styles.viewDetailsText}>View Detailed Report →</Text>
//       </TouchableOpacity>
//     </Animated.View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Health History</Text>
//       <Text style={styles.subTitle}>Your daily records & statistics</Text>

//       <FlatList
//         data={healthData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.listContainer}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default ViewHealthHistoryScreen;

// /* -------------------------------------------------------------------------- */
// /*                                   STYLES                                   */
// /* -------------------------------------------------------------------------- */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#EEF5FF',
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#1E3A8A',
//   },

//   subTitle: {
//     fontSize: 16,
//     color: '#475569',
//     marginBottom: 20,
//   },

//   listContainer: {
//     paddingBottom: 40,
//   },

//   recordContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     marginBottom: 18,
//     borderRadius: 12,
//     borderLeftWidth: 6,
//     borderColor: '#3B82F6',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },

//   dateBadge: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#DBEAFE',
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//     borderRadius: 6,
//     marginBottom: 12,
//   },

//   dateText: {
//     color: '#1E40AF',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 3,
//   },

//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#475569',
//   },

//   value: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#111827',
//   },

//   viewDetailsButton: {
//     marginTop: 15,
//     backgroundColor: '#2563EB',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },

//   viewDetailsText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });












// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ViewHealthHistoryScreen = () => {
//   const [records, setRecords] = useState<any[]>([]);

//   useEffect(() => {
//     const loadHistory = async () => {
//       const data = await AsyncStorage.getItem("healthRecords");
//       if (data) setRecords(JSON.parse(data));
//     };
//     loadHistory();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Health History</Text>

//       <FlatList
//         data={records}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.date}>{item.date}</Text>
//             <Text>💓 BP: {item.bloodPressure}</Text>
//             <Text>❤️ HR: {item.heartRate}</Text>
//             <Text>👣 Steps: {item.steps}</Text>
//             <Text>🔥 Calories: {item.calories}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default ViewHealthHistoryScreen;


// /* -------------------------------------------------------------------------- */
// /*                                   STYLES                                   */
// /* -------------------------------------------------------------------------- */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#EEF5FF',
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#1E3A8A',
//   },

//   subTitle: {
//     fontSize: 16,
//     color: '#475569',
//     marginBottom: 20,
//   },

//   listContainer: {
//     paddingBottom: 40,
//   },

//   recordContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     marginBottom: 18,
//     borderRadius: 12,
//     borderLeftWidth: 6,
//     borderColor: '#3B82F6',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },

//   dateBadge: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#DBEAFE',
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//     borderRadius: 6,
//     marginBottom: 12,
//   },

//   dateText: {
//     color: '#1E40AF',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 3,
//   },

//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#475569',
//   },

//   value: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#111827',
//   },

//   viewDetailsButton: {
//     marginTop: 15,
//     backgroundColor: '#2563EB',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },

//   viewDetailsText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



// type HealthRecord = {
//   _id: string;
//   bloodPressure: string;
//   heartRate: string;
//   steps: string;
//   calories: string;
//   createdAt: string;
// };



// import React, { useEffect, useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Animated,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons } from '@expo/vector-icons';
// import api from '../../utils/api';
// const ViewHealthHistoryScreen = () => {
//   const [records, setRecords] = useState<HealthRecord[]>([]);

//   const fadeAnim = useRef(new Animated.Value(0)).current;

// useEffect(() => {
//   const loadHistory = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");

//       const res = await api.get("/health", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setRecords(res.data);
//     } catch (err) {
//       console.log("Health History Error:", err);
//     }
//   };

//   loadHistory();
// }, []);




//   const renderItem = ({ item }: { item: any }) => (
//     <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      
//       {/* DATE BADGE */}
//       <View style={styles.dateBadge}>
//         <Ionicons name="calendar-outline" size={16} color="#1E40AF" />
//       <Text>
//   {new Date(item.createdAt).toDateString()}
// </Text>


//       </View>

//       {/* BLOOD PRESSURE */}
//       <View style={styles.row}>
//         <Ionicons name="heart-circle" size={26} color="#EF4444" />
//         <Text style={styles.label}>Blood Pressure</Text>
//         <Text style={styles.value}>{item.bloodPressure}</Text>
//       </View>

//       {/* HEART RATE */}
//       <View style={styles.row}>
//         <Ionicons name="pulse-outline" size={26} color="#2563EB" />
//         <Text style={styles.label}>Heart Rate</Text>
//         <Text style={styles.value}>{item.heartRate}</Text>
//       </View>

//       {/* STEPS */}
//       <View style={styles.row}>
//         <Ionicons name="walk-outline" size={26} color="#16A34A" />
//         <Text style={styles.label}>Steps</Text>
//         <Text style={styles.value}>{item.steps}</Text>
//       </View>

//       {/* CALORIES */}
//       <View style={styles.row}>
//         <Ionicons name="flame-outline" size={26} color="#F97316" />
//         <Text style={styles.label}>Calories</Text>
//         <Text style={styles.value}>{item.calories}</Text>
//       </View>
//     </Animated.View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Health History</Text>
//       <Text style={styles.subtitle}>Your past health records</Text>

//       {records.length === 0 ? (
//         <View style={styles.emptyBox}>
//           <Ionicons name="alert-circle-outline" size={50} color="#94A3B8" />
//           <Text style={styles.emptyText}>No health records available</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={records}
//           renderItem={renderItem}
//           keyExtractor={(item) => item._id}
//           contentContainerStyle={{ paddingBottom: 40 }}
//           showsVerticalScrollIndicator={false}
//         />
//       )}
//     </View>
//   );
// };

// export default ViewHealthHistoryScreen;

// /* ================= STYLES ================= */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#EEF5FF',
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#1E3A8A',
//   },

//   subtitle: {
//     fontSize: 16,
//     color: '#475569',
//     marginBottom: 20,
//   },

//   emptyBox: {
//     marginTop: 60,
//     alignItems: 'center',
//   },

//   emptyText: {
//     marginTop: 10,
//     fontSize: 18,
//     color: '#64748B',
//   },

//   card: {
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     marginBottom: 18,
//     borderRadius: 14,
//     borderLeftWidth: 6,
//     borderLeftColor: '#3B82F6',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },

//   dateBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#DBEAFE',
//     alignSelf: 'flex-start',
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//     borderRadius: 6,
//     marginBottom: 12,
//   },

//   dateText: {
//     marginLeft: 6,
//     color: '#1E40AF',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },

//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 6,
//   },

//   label: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#475569',
//   },

//   value: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#111827',
//   },
// });












type HealthRecord = {
  _id: string;
  bloodPressure: string;
  heartRate: string;
  steps: string;
  calories: string;
  createdAt: string;
};
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewHealthHistoryScreen = () => {
  const [records, setRecords] = useState<any[]>([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        const res = await api.get('/health', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('HEALTH RECORDS:', res.data); // 🔍 DEBUG
        setRecords(res.data);
      } catch (error) {
        console.log('Health History Error:', error);
      }
    };

    loadHistory();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      
      {/* DATE */}
      <View style={styles.dateBadge}>
        <Ionicons name="calendar-outline" size={16} color="#1E40AF" />
        <Text style={styles.dateText}>
          {new Date(item.createdAt).toDateString()}
        </Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="heart-circle" size={26} color="#EF4444" />
        <Text style={styles.label}>Blood Pressure</Text>
        <Text style={styles.value}>{item.bloodPressure}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="pulse-outline" size={26} color="#2563EB" />
        <Text style={styles.label}>Heart Rate</Text>
        <Text style={styles.value}>{item.heartRate}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="walk-outline" size={26} color="#16A34A" />
        <Text style={styles.label}>Steps</Text>
        <Text style={styles.value}>{item.steps}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="flame-outline" size={26} color="#F97316" />
        <Text style={styles.label}>Calories</Text>
        <Text style={styles.value}>{item.calories}</Text>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health History</Text>
      <Text style={styles.subtitle}>Your past health records</Text>

      {records.length === 0 ? (
        <View style={styles.emptyBox}>
          <Ionicons name="alert-circle-outline" size={50} color="#94A3B8" />
          <Text style={styles.emptyText}>No health records available</Text>
        </View>
      ) : (
        <FlatList
          data={records}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ViewHealthHistoryScreen;


/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b1c9e1ff',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },

  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 20,
  },

  emptyBox: {
    marginTop: 60,
    alignItems: 'center',
  },

  emptyText: {
    marginTop: 10,
    fontSize: 18,
    color: '#64748B',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 18,
    borderRadius: 14,
    borderLeftWidth: 6,
    borderLeftColor: '#3B82F6',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  dateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBEAFE',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 12,
  },

  dateText: {
    marginLeft: 6,
    color: '#1E40AF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  label: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
  },

  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
});
