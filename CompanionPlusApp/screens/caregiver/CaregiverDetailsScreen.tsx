// // Path: CompanionPlusApp/screens/caregivers/CaregiverDetailsScreen.tsx
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { RouteProp } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native'; // Corrected import
// import { StackNavigationProp } from '@react-navigation/stack'; // Corrected import
// import { RootStackParamList } from '../../navigation/RootNavigator'; 

// // Define the route prop type
// type CaregiverDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CaregiverDetails'>;

// const CaregiverDetailsScreen = ({ route }: { route: CaregiverDetailsScreenRouteProp }) => {
//   const { caregiverId } = route.params;

//   // Simulate fetching caregiver data (in a real app, you'd fetch data from the backend)
//   const caregiver = {
//     id: caregiverId,
//     name: 'Archana',
//     specialty: 'Health Monitoring',
//     experience: '3 years',
//     location: 'Chennai',
//     contact: '123-456-7890',
//     about: 'Experienced in monitoring health metrics and providing emergency alerts. Specialized in elderly care.',
//   };

//   // Correct usage of useNavigation with StackNavigationProp for type safety
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

//   // Handle caregiver request
//   const handleRequestCaregiver = () => {
//     // Navigate to the RequestCaregiverScreen
//     navigation.navigate('RequestCaregiver', { caregiverId });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{caregiver.name}</Text>
//       <Text style={styles.specialty}>{caregiver.specialty}</Text>
//       <Text style={styles.experience}>Experience: {caregiver.experience}</Text>
//       <Text style={styles.location}>Location: {caregiver.location}</Text>
//       <Text style={styles.contact}>Contact: {caregiver.contact}</Text>
//       <Text style={styles.about}>{caregiver.about}</Text>

//       <Button
//         title="Request Caregiver"
//         onPress={handleRequestCaregiver}
//         color="#4CAF50"
//       />
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
//   specialty: {
//     fontSize: 18,
//     color: '#555',
//     marginBottom: 5,
//   },
//   experience: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 5,
//   },
//   location: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 5,
//   },
//   contact: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 5,
//   },
//   about: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//   },
// });

// export default CaregiverDetailsScreen;





// // Path: CompanionPlusApp/screens/caregivers/CaregiverDetailsScreen.tsx
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import api from '../../utils/api';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// // Types
// type CaregiverDetailsScreenRouteProp = RouteProp<
//   RootStackParamList,
//   'CaregiverDetails'
// >;

// const CaregiverDetailsScreen = ({ route }: { route: CaregiverDetailsScreenRouteProp }) => {
//   const { caregiverId } = route.params;
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

//   const [caregiver, setCaregiver] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   // 🔥 Fetch caregiver details from backend
//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const res = await api.get(`/caregivers/${caregiverId}`);
//         setCaregiver(res.data);
//       } catch (error) {
//         console.log("Caregiver Details Fetch Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [caregiverId]);

//   const handleRequestCaregiver = () => {
//     navigation.navigate('RequestCaregiver', { caregiverId });
//   };

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//       </View>
//     );
//   }

//   if (!caregiver) {
//     return (
//       <View style={styles.center}>
//         <Text style={{ fontSize: 18, color: '#555' }}>Caregiver not found</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{caregiver.name}</Text>
//       <Text style={styles.specialty}>{caregiver.specialty}</Text>
//       <Text style={styles.experience}>Experience: {caregiver.experience}</Text>
//       <Text style={styles.location}>Location: {caregiver.location}</Text>
//       <Text style={styles.contact}>Contact: {caregiver.phone}</Text>
//       <Text style={styles.about}>{caregiver.about}</Text>

//       <Button
//         title="Request Caregiver"
//         onPress={handleRequestCaregiver}
//         color="#4CAF50"
//       />
//     </View>
//   );
// };

// export default CaregiverDetailsScreen;

// /* ------------ STYLES ------------ */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f2f2f2',
//   },
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//     marginBottom: 10,
//   },
//   specialty: {
//     fontSize: 18,
//     color: '#555',
//     marginBottom: 5,
//   },
//   experience: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 5,
//   },
//   location: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 5,
//   },
//   contact: {
//     fontSize: 16,
//     color: '#777',
//     marginBottom: 5,
//   },
//   about: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//   },
// });



// // Path: CompanionPlusApp/screens/caregivers/CaregiverDetailsScreen.tsx
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import api from '../../utils/api';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// // Types
// type CaregiverDetailsScreenRouteProp = RouteProp<
//   RootStackParamList,
//   'CaregiverDetails'
// >;

// const CaregiverDetailsScreen = ({ route }: { route: CaregiverDetailsScreenRouteProp }) => {
//   const { caregiverId } = route.params;
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

//   const [caregiver, setCaregiver] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch details
//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const res = await api.get(`/caregivers/${caregiverId}`);
//         setCaregiver(res.data);
//       } catch (error) {
//         console.log("Caregiver Details Fetch Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [caregiverId]);

//   const handleRequestCaregiver = () => {
//     navigation.navigate('RequestCaregiver', { caregiverId });
//   };

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//       </View>
//     );
//   }

//   if (!caregiver) {
//     return (
//       <View style={styles.center}>
//         <Text style={{ fontSize: 18, color: '#555' }}>Caregiver not found</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {/* Profile Card */}
//       <View style={styles.card}>

//         {/* Avatar */}
//         <View style={styles.avatarWrapper}>
//           <Image
//             source={{ uri: "https://i.pravatar.cc/150?img=65" }}
//             style={styles.avatar}
//           />
//           <Text style={styles.name}>{caregiver.name}</Text>
//           <Text style={styles.specialty}>{caregiver.specialty}</Text>
//         </View>

//         {/* Details Section */}
//         <View style={styles.infoSection}>
//           <Text style={styles.sectionTitle}>About</Text>

//           <Text style={styles.infoText}>
//             📍 <Text style={styles.bold}>{caregiver.location}</Text>
//           </Text>

//           <Text style={styles.infoText}>
//             ⏳ Experience: <Text style={styles.bold}>{caregiver.experience}</Text>
//           </Text>

//           <Text style={styles.infoText}>
//             ☎ Contact: <Text style={styles.bold}>{caregiver.phone}</Text>
//           </Text>

//           {caregiver.gender && (
//             <Text style={styles.infoText}>
//               👤 Gender: <Text style={styles.bold}>{caregiver.gender}</Text>
//             </Text>
//           )}

//           {caregiver.about && (
//             <Text style={styles.about}>{caregiver.about}</Text>
//           )}
//         </View>

//         {/* Request Button */}
//         <TouchableOpacity style={styles.button} onPress={handleRequestCaregiver}>
//           <Text style={styles.buttonText}>Request Caregiver</Text>
//         </TouchableOpacity>

//       </View>
//     </ScrollView>
//   );
// };

// export default CaregiverDetailsScreen;

// /* ------------ STYLES ------------ */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F0F4F8",
//   },

//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   card: {
//     backgroundColor: "#FFFFFF",
//     margin: 16,
//     padding: 20,
//     borderRadius: 16,
//     elevation: 5,
//     shadowColor: "#000",
//   },

//   avatarWrapper: {
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   avatar: {
//     width: 110,
//     height: 110,
//     borderRadius: 55,
//     marginBottom: 12,
//   },

//   name: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#1F2937",
//   },

//   specialty: {
//     fontSize: 16,
//     color: "#059669",
//     fontWeight: "600",
//     marginBottom: 10,
//   },

//   infoSection: {
//     marginTop: 12,
//   },

//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#374151",
//     marginBottom: 10,
//   },

//   infoText: {
//     fontSize: 16,
//     color: "#4B5563",
//     marginVertical: 4,
//   },

//   bold: {
//     fontWeight: "700",
//   },

//   about: {
//     fontSize: 16,
//     marginTop: 12,
//     color: "#374151",
//     lineHeight: 22,
//   },

//   button: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 14,
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: "center",
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });



// // Path: CompanionPlusApp/screens/caregivers/CaregiverDetailsScreen.tsx
// import React, { useEffect, useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Animated,
// } from 'react-native';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import api from '../../utils/api';
// import { RootStackParamList } from '../../navigation/RootNavigator';

// type CaregiverDetailsScreenRouteProp = RouteProp<
//   RootStackParamList,
//   'CaregiverDetails'
// >;

// const CaregiverDetailsScreen = ({ route }: { route: CaregiverDetailsScreenRouteProp }) => {
//   const { caregiverId } = route.params;
//   const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

//   const [caregiver, setCaregiver] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const res = await api.get(`/caregivers/${caregiverId}`);
//         setCaregiver(res.data);
//       } catch (error) {
//         console.log("Caregiver Details Fetch Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [caregiverId]);

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const handleRequestCaregiver = () => {
//     navigation.navigate('RequestCaregiver', { caregiverId });
//   };

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//       </View>
//     );
//   }

//   if (!caregiver) {
//     return (
//       <View style={styles.center}>
//         <Text style={styles.notFound}>Caregiver not found</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <Animated.View style={[styles.card, { opacity: fadeAnim }]}>

//         {/* Avatar Section */}
//         <View style={styles.avatarWrapper}>
//           <Image
//             source={{ uri: "https://i.pravatar.cc/150?img=65" }}
//             style={styles.avatar}
//           />
//           <Text style={styles.name}>{caregiver.name}</Text>
//           <Text style={styles.specialty}>{caregiver.specialty}</Text>
//         </View>

//         {/* About Section */}
//         <View style={styles.sectionCard}>
//           <Text style={styles.sectionTitle}>About</Text>

//           <Text style={styles.infoText}>
//             📍 <Text style={styles.bold}>{caregiver.location}</Text>
//           </Text>

//           <Text style={styles.infoText}>
//             ⏳ Experience: <Text style={styles.bold}>{caregiver.experience}</Text>
//           </Text>

//           <Text style={styles.infoText}>
//             ☎ Contact: <Text style={styles.bold}>{caregiver.phone}</Text>
//           </Text>

//           {caregiver.gender && (
//             <Text style={styles.infoText}>
//               👤 Gender: <Text style={styles.bold}>{caregiver.gender}</Text>
//             </Text>
//           )}

//           {caregiver.about && (
//             <Text style={styles.about}>{caregiver.about}</Text>
//           )}
//         </View>

//         {/* Action Button */}
//         <TouchableOpacity
//           style={styles.button}
//           activeOpacity={0.8}
//           onPress={handleRequestCaregiver}
//         >
//           <Text style={styles.buttonText}>Request Caregiver</Text>
//         </TouchableOpacity>

//       </Animated.View>
//     </ScrollView>
//   );
// };

// export default CaregiverDetailsScreen;
// /* ------------ STYLES ------------ */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F0F4F8",
//   },

//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   notFound: {
//     fontSize: 18,
//     color: "#6B7280",
//   },

//   card: {
//     backgroundColor: "#FFFFFF",
//     margin: 16,
//     padding: 20,
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 6,
//   },

//   avatarWrapper: {
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   avatar: {
//     width: 115,
//     height: 115,
//     borderRadius: 60,
//     marginBottom: 12,
//     borderWidth: 3,
//     borderColor: "#4CAF50",
//   },

//   name: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#1F2937",
//   },

//   specialty: {
//     fontSize: 16,
//     color: "#059669",
//     fontWeight: "600",
//     marginTop: 4,
//   },

//   sectionCard: {
//     backgroundColor: "#F9FAFB",
//     borderRadius: 14,
//     padding: 16,
//     marginTop: 10,
//   },

//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#374151",
//     marginBottom: 10,
//   },

//   infoText: {
//     fontSize: 16,
//     color: "#4B5563",
//     marginVertical: 4,
//   },

//   bold: {
//     fontWeight: "700",
//   },

//   about: {
//     fontSize: 16,
//     marginTop: 10,
//     color: "#374151",
//     lineHeight: 22,
//   },

//   button: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 15,
//     borderRadius: 12,
//     marginTop: 24,
//     alignItems: "center",
//     shadowColor: "#4CAF50",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 4,
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "700",
//     letterSpacing: 0.5,
//   },
// });





// Path: CompanionPlusApp/screens/caregivers/CaregiverDetailsScreen.tsx
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import api from '../../utils/api';
import { RootStackParamList } from '../../navigation/RootNavigator';

type CaregiverDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'CaregiverDetails'
>;

const CaregiverDetailsScreen = ({ route }: { route: CaregiverDetailsScreenRouteProp }) => {
  const { caregiverId } = route.params;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [caregiver, setCaregiver] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await api.get(`/caregivers/${caregiverId}`);
        setCaregiver(res.data);
      } catch (error) {
        console.log('Caregiver Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [caregiverId]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleRequestCaregiver = () => {
    navigation.navigate('RequestCaregiver', 
      { caregiverId,
        caregiverName: caregiver.name

       });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#7ED6A7" />
      </View>
    );
  }

  if (!caregiver) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Caregiver not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.View
        style={[
          styles.mainCard,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
          },
        ]}
      >
        {/* ===== Profile Card ===== */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100?img=5" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{caregiver.name}</Text>
          <Text style={styles.specialty}>{caregiver.specialty}</Text>
        </View>

        {/* ===== Info Cards ===== */}
        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Text style={styles.icon}>📍</Text>
            <Text style={styles.infoTitle}>Location</Text>
            <Text style={styles.infoValue}>{caregiver.location}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.icon}>⏳</Text>
            <Text style={styles.infoTitle}>Experience</Text>
            <Text style={styles.infoValue}>{caregiver.experience}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.icon}>☎</Text>
            <Text style={styles.infoTitle}>Contact</Text>
            <Text style={styles.infoValue}>{caregiver.phone}</Text>
          </View>

          {caregiver.gender && (
            <View style={styles.infoBox}>
              <Text style={styles.icon}>👤</Text>
              <Text style={styles.infoTitle}>Gender</Text>
              <Text style={styles.infoValue}>{caregiver.gender}</Text>
            </View>
          )}

        {caregiver.email && (
            <View style={styles.infoBox}>
              <Text style={styles.icon}>👤</Text>
              <Text style={styles.infoTitle}>Gender</Text>
              <Text style={styles.infoValue}>{caregiver.email}</Text>
            </View>
          )}

          

        </View>
          
        {/* ===== About Card ===== */}
        {caregiver.about && (
          <View style={styles.aboutCard}>
            <Text style={styles.aboutTitle}>About Caregiver</Text>
            <Text style={styles.aboutText}>{caregiver.about}</Text>
          </View>
        )}

        {/* ===== Action Button ===== */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={handleRequestCaregiver}
        >
          <Text style={styles.buttonText}>Request Caregiver</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

export default CaregiverDetailsScreen;

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF7F3', // 🌿 Soft mint background
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notFound: {
    fontSize: 20,
    color: '#6B7280',
  },

  mainCard: {
    margin: 16,
    backgroundColor: '#F9FAFF', // 💜 Very light lavender
    borderRadius: 26,
    padding: 22,
    elevation: 8,
  },

  profileCard: {
    alignItems: 'center',
    marginBottom: 22,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#C7EDE6',
    marginBottom: 14,
  },

  name: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F766E', // Deep teal
  },

  specialty: {
    fontSize: 18,
    color: '#14B8A6',
    fontWeight: '600',
    marginTop: 4,
  },

  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  infoBox: {
    width: '48%',
    backgroundColor: '#E6F4FF', // ☁️ Soft sky blue
    borderRadius: 18,
    padding: 16,
    marginVertical: 8,
  },

  icon: {
    fontSize: 26,
    marginBottom: 6,
  },

  infoTitle: {
    fontSize: 16,
    color: '#0369A1',
    fontWeight: '600',
  },

  infoValue: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0C4A6E',
    marginTop: 2,
  },

  aboutCard: {
    backgroundColor: '#FFF7ED', // 🌸 Warm cream
    borderRadius: 18,
    padding: 18,
    marginTop: 18,
  },

  aboutTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#9A3412',
    marginBottom: 8,
  },

  aboutText: {
    fontSize: 18,
    color: '#7C2D12',
    lineHeight: 26,
  },

  button: {
    backgroundColor: '#2DD4BF', // 🌊 Attractive teal
    paddingVertical: 18,
    borderRadius: 18,
    marginTop: 26,
    alignItems: 'center',
    shadowColor: '#0F766E',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  buttonText: {
    fontSize: 21,
    fontWeight: '800',
    color: '#064E3B',
    letterSpacing: 0.7,
  },
});
