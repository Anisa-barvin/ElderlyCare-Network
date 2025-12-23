

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
//   const slideAnim = useRef(new Animated.Value(40)).current;
//   const scaleAnim = useRef(new Animated.Value(0.95)).current;

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const res = await api.get(`/caregivers/${caregiverId}`);
//         setCaregiver(res.data);
//       } catch (error) {
//         console.log('Caregiver Fetch Error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [caregiverId]);

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 700,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 700,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         friction: 6,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   const handleRequestCaregiver = () => {
//     navigation.navigate('RequestCaregiver', 
//       { caregiverId,
//         caregiverName: caregiver.name

//        });
//   };

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#7ED6A7" />
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
//       <Animated.View
//         style={[
//           styles.mainCard,
//           {
//             opacity: fadeAnim,
//             transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
//           },
//         ]}
//       >
//         {/* ===== Profile Card ===== */}
//         <View style={styles.profileCard}>
//           <Image
//             source={{ uri: "https://i.pravatar.cc/100?img=5" }}
//             style={styles.avatar}
//           />
//           <Text style={styles.name}>{caregiver.name}</Text>
//           <Text style={styles.specialty}>{caregiver.specialty}</Text>
//         </View>

//         {/* ===== Info Cards ===== */}
//         <View style={styles.infoGrid}>
//           <View style={styles.infoBox}>
//             <Text style={styles.icon}>📍</Text>
//             <Text style={styles.infoTitle}>Location</Text>
//             <Text style={styles.infoValue}>{caregiver.location}</Text>
//           </View>

//           <View style={styles.infoBox}>
//             <Text style={styles.icon}>⏳</Text>
//             <Text style={styles.infoTitle}>Experience</Text>
//             <Text style={styles.infoValue}>{caregiver.experience}</Text>
//           </View>

//           <View style={styles.infoBox}>
//             <Text style={styles.icon}>☎</Text>
//             <Text style={styles.infoTitle}>Contact</Text>
//             <Text style={styles.infoValue}>{caregiver.phone}</Text>
//           </View>

//           {caregiver.gender && (
//             <View style={styles.infoBox}>
//               <Text style={styles.icon}>👤</Text>
//               <Text style={styles.infoTitle}>Gender</Text>
//               <Text style={styles.infoValue}>{caregiver.gender}</Text>
//             </View>
//           )}

//         {caregiver.email && (
//             <View style={styles.infoBox}>
//               <Text style={styles.icon}>👤</Text>
//               <Text style={styles.infoTitle}>Gender</Text>
//               <Text style={styles.infoValue}>{caregiver.email}</Text>
//             </View>
//           )}

          

//         </View>
          
//         {/* ===== About Card ===== */}
//         {caregiver.about && (
//           <View style={styles.aboutCard}>
//             <Text style={styles.aboutTitle}>About Caregiver</Text>
//             <Text style={styles.aboutText}>{caregiver.about}</Text>
//           </View>
//         )}

//         {/* ===== Action Button ===== */}
//         <TouchableOpacity
//           style={styles.button}
//           activeOpacity={0.85}
//           onPress={handleRequestCaregiver}
//         >
//           <Text style={styles.buttonText}>Request Caregiver</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </ScrollView>
//   );
// };

// export default CaregiverDetailsScreen;

// /* ================= STYLES ================= */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EEF7F3', // 🌿 Soft mint background
//   },

//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   notFound: {
//     fontSize: 20,
//     color: '#6B7280',
//   },

//   mainCard: {
//     margin: 16,
//     backgroundColor: '#F9FAFF', // 💜 Very light lavender
//     borderRadius: 26,
//     padding: 22,
//     elevation: 8,
//   },

//   profileCard: {
//     alignItems: 'center',
//     marginBottom: 22,
//   },

//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 65,
//     borderWidth: 4,
//     borderColor: '#C7EDE6',
//     marginBottom: 14,
//   },

//   name: {
//     fontSize: 30,
//     fontWeight: '800',
//     color: '#0F766E', // Deep teal
//   },

//   specialty: {
//     fontSize: 18,
//     color: '#14B8A6',
//     fontWeight: '600',
//     marginTop: 4,
//   },

//   infoGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },

//   infoBox: {
//     width: '48%',
//     backgroundColor: '#E6F4FF', // ☁️ Soft sky blue
//     borderRadius: 18,
//     padding: 16,
//     marginVertical: 8,
//   },

//   icon: {
//     fontSize: 26,
//     marginBottom: 6,
//   },

//   infoTitle: {
//     fontSize: 16,
//     color: '#0369A1',
//     fontWeight: '600',
//   },

//   infoValue: {
//     fontSize: 19,
//     fontWeight: '700',
//     color: '#0C4A6E',
//     marginTop: 2,
//   },

//   aboutCard: {
//     backgroundColor: '#FFF7ED', // 🌸 Warm cream
//     borderRadius: 18,
//     padding: 18,
//     marginTop: 18,
//   },

//   aboutTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#9A3412',
//     marginBottom: 8,
//   },

//   aboutText: {
//     fontSize: 18,
//     color: '#7C2D12',
//     lineHeight: 26,
//   },

//   button: {
//     backgroundColor: '#2DD4BF', // 🌊 Attractive teal
//     paddingVertical: 18,
//     borderRadius: 18,
//     marginTop: 26,
//     alignItems: 'center',
//     shadowColor: '#0F766E',
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 5,
//   },

//   buttonText: {
//     fontSize: 21,
//     fontWeight: '800',
//     color: '#064E3B',
//     letterSpacing: 0.7,
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
    navigation.navigate('RequestCaregiver', {
      caregiverId,
      caregiverName: caregiver.name,
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

  const firstLetter = caregiver.name?.charAt(0).toUpperCase();

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
        {/* ===== PROFILE CARD ===== */}
        <View style={styles.profileCard}>
          {/* LETTER AVATAR */}
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{firstLetter}</Text>
          </View>

          <Text style={styles.name}>{caregiver.name}</Text>
          <Text style={styles.specialty}>{caregiver.specialty}</Text>
        </View>

        {/* ===== INFO GRID ===== */}
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
              <Text style={styles.icon}>✉️</Text>
              <Text style={styles.infoTitle}>Email</Text>
              <Text style={styles.infoValue}>{caregiver.email}</Text>
            </View>
          )}
        </View>

        {/* ===== ABOUT ===== */}
        {caregiver.about && (
          <View style={styles.aboutCard}>
            <Text style={styles.aboutTitle}>About Caregiver</Text>
            <Text style={styles.aboutText}>{caregiver.about}</Text>
          </View>
        )}

        {/* ===== ACTION BUTTON ===== */}
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
    backgroundColor: '#EEF7F3',
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
    backgroundColor: '#F9FAFF',
    borderRadius: 26,
    padding: 22,
    elevation: 8,
  },

  profileCard: {
    alignItems: 'center',
    marginBottom: 22,
  },

  /* LETTER AVATAR */
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    borderWidth: 4,
    borderColor: '#C7EDE6',
  },

  avatarText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  name: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F766E',
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
    backgroundColor: '#E6F4FF',
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
    backgroundColor: '#FFF7ED',
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
    backgroundColor: '#2DD4BF',
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
