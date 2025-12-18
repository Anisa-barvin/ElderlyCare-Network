
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const ElderProfileScreen = () => {
//   const navigation = useNavigation();

//   const elderProfile = {
//     name: 'Anisa',
//     age: 25,
//     gender: 'Female',
//     address: 'Chennai',
//     contact: '1234567890',
//     email: 'anisa@gmail.com',
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.card}>

//         {/* LEFT PANEL */}
//         <View style={styles.leftPanel}>
//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>
//               {elderProfile.name.charAt(0)}
//             </Text>
//           </View>

//           <Text style={styles.name}>{elderProfile.name}</Text>
//           <Text style={styles.role}>Elder</Text>

//           <TouchableOpacity
//             style={styles.editIcon}
//             onPress={() => navigation.navigate('EditProfile' as never)}
//           >
//             <Text style={styles.editText}>✎ Edit</Text>
//           </TouchableOpacity>
//         </View>

//         {/* RIGHT PANEL */}
//         <View style={styles.rightPanel}>
//           <Text style={styles.sectionTitle}>Profile</Text>

//           <View style={styles.row}>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Email</Text>
//               <Text style={styles.value}>{elderProfile.email}</Text>
//             </View>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Phone</Text>
//               <Text style={styles.value}>{elderProfile.contact}</Text>
//             </View>
//           </View>

//           <View style={styles.row}>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Age</Text>
//               <Text style={styles.value}>{elderProfile.age}</Text>
//             </View>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Gender</Text>
//               <Text style={styles.value}>{elderProfile.gender}</Text>
//             </View>
//           </View>

//           <View style={styles.infoBlockFull}>
//             <Text style={styles.label}>Address</Text>
//             <Text style={styles.value}>{elderProfile.address}</Text>
//           </View>
//         </View>

//       </View>
//     </ScrollView>
//   );
// };

// export default ElderProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6',
//     padding: 20,
//   },

//   card: {
//     flexDirection: 'row',
//     width: '90%',
//     maxWidth: 900,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     elevation: 5,
//   },

//   /* LEFT PANEL */
//   leftPanel: {
//     width: '30%',
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },

//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 12,
//   },

//   avatarText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },

//   role: {
//     fontSize: 14,
//     color: '#FFF7ED',
//     marginBottom: 20,
//   },

//   editIcon: {
//     marginTop: 10,
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//   },

//   editText: {
//     color: '#4CAF50',
//     fontWeight: 'bold',
//   },

//   /* RIGHT PANEL */
//   rightPanel: {
//     width: '70%',
//     padding: 20,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 16,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 14,
//   },

//   infoBlock: {
//     width: '48%',
//   },

//   infoBlockFull: {
//     marginTop: 10,
//   },

//   label: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginBottom: 4,
//   },

//   value: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//   },
// });








// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api';

// const ElderProfileScreen = () => {
//   const navigation = useNavigation();

//   const [profile, setProfile] = useState<any>(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');

//         const response = await api.get('/elder', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setProfile(response.data);
//       } catch (error) {
//         console.log("PROFILE ERROR:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (!profile) return <Text style={{ marginTop: 50 }}>Loading...</Text>;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.card}>

//         {/* LEFT PANEL */}
//         <View style={styles.leftPanel}>
//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>
//               {profile.name?.charAt(0)}
//             </Text>
//           </View>

//           <Text style={styles.name}>{profile.name}</Text>
//           <Text style={styles.role}>Elder</Text>

//           <TouchableOpacity
//             style={styles.editIcon}
//             onPress={() => navigation.navigate('EditProfile' as never)}
//           >
//             <Text style={styles.editText}>✎ Edit</Text>
//           </TouchableOpacity>
//         </View>

//         {/* RIGHT PANEL */}
//         <View style={styles.rightPanel}>
//           <Text style={styles.sectionTitle}>Profile</Text>

//           <View style={styles.row}>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Email</Text>
//               <Text style={styles.value}>{profile.email}</Text>
//             </View>

//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Phone</Text>
//               <Text style={styles.value}>{profile.contact || profile.phone}</Text>
//             </View>
//           </View>

//           <View style={styles.row}>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Age</Text>
//               <Text style={styles.value}>{profile.age}</Text>
//             </View>

//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Gender</Text>
//               <Text style={styles.value}>{profile.gender}</Text>
//             </View>
//           </View>

//           <View style={styles.infoBlockFull}>
//             <Text style={styles.label}>Address</Text>
//             <Text style={styles.value}>{profile.address}</Text>
//           </View>
//         </View>

//       </View>
//     </ScrollView>
//   );
// };

// export default ElderProfileScreen;

// /* ========== YOUR ORIGINAL STYLES BELOW (UNCHANGED) ========== */

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6',
//     padding: 20,
//   },

//   card: {
//     flexDirection: 'row',
//     width: '90%',
//     maxWidth: 900,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     elevation: 5,
//   },

//   /* LEFT PANEL */
//   leftPanel: {
//     width: '30%',
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },

//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 12,
//   },

//   avatarText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },

//   role: {
//     fontSize: 14,
//     color: '#FFF7ED',
//     marginBottom: 20,
//   },

//   editIcon: {
//     marginTop: 10,
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//   },

//   editText: {
//     color: '#4CAF50',
//     fontWeight: 'bold',
//   },

//   /* RIGHT PANEL */
//   rightPanel: {
//     width: '70%',
//     padding: 20,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 16,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 14,
//   },

//   infoBlock: {
//     width: '48%',
//   },

//   infoBlockFull: {
//     marginTop: 10,
//   },

//   label: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginBottom: 4,
//   },

//   value: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//   },
// });










// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api';

// const ElderProfileScreen = () => {
//   const navigation = useNavigation();
//   const [profile, setProfile] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         setLoading(true);

//         // Get token from storage
//         const token = await AsyncStorage.getItem('token');
//         if (!token) {
//           console.warn('No token found in AsyncStorage');
//           Alert.alert('Not logged in', 'Please login to view profile');
//           setLoading(false);
//           return;
//         }

//         // ===== Choose the correct path depending on your api.baseURL =====
//         // If your api.ts baseURL is "http://localhost:5000" (NO /api), use:
//        // const endpoint = '/elder';

//         // If your api.ts baseURL already contains "/api" (e.g. "http://localhost:5000/api"),
//         // use this instead:
//         // const endpoint = '/elder/me';

//         // Make request with Authorization header
//         const response = await api.get('/elder/me', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setProfile(response.data);
//       } catch (error: any) {
//         console.log('PROFILE ERROR:', error);

//         // Axios error message
//         const msg =
//           error?.response?.data?.message ||
//           error?.message ||
//           'Failed to fetch profile';

//         // Show small informative alert (optional)
//         Alert.alert('Profile Error', msg);

//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#4CAF50" />
//       </View>
//     );
//   }

//   if (!profile) {
//     return (
//       <View style={styles.loaderContainer}>
//         <Text style={{ color: '#333' }}>No profile available.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.card}>

//         {/* LEFT PANEL */}
//         <View style={styles.leftPanel}>
//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>
//               {profile.name?.charAt(0) ?? 'A'}
//             </Text>
//           </View>

//           <Text style={styles.name}>{profile.name}</Text>
//           <Text style={styles.role}>Elder</Text>

//           <TouchableOpacity
//             style={styles.editIcon}
//             onPress={() => navigation.navigate('EditProfile' as never)}
//           >
//             <Text style={styles.editText}>✎ Edit</Text>
//           </TouchableOpacity>
//         </View>

//         {/* RIGHT PANEL */}
//         <View style={styles.rightPanel}>
//           <Text style={styles.sectionTitle}>Profile</Text>

//           <View style={styles.row}>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Email</Text>
//               <Text style={styles.value}>{profile.email}</Text>
//             </View>

//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Phone</Text>
//               {/* backend field might be phone or contact depending on model */}
//               <Text style={styles.value}>{profile.phone || profile.contact || 'N/A'}</Text>
//             </View>
//           </View>

//           <View style={styles.row}>
//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Age</Text>
//               <Text style={styles.value}>{profile.age}</Text>
//             </View>

//             <View style={styles.infoBlock}>
//               <Text style={styles.label}>Gender</Text>
//               <Text style={styles.value}>{profile.gender}</Text>
//             </View>
//           </View>

//           <View style={styles.infoBlockFull}>
//             <Text style={styles.label}>Address</Text>
//             <Text style={styles.value}>{profile.address}</Text>
//           </View>
//         </View>

//       </View>
//     </ScrollView>
//   );
// };

// export default ElderProfileScreen;

// /* ========== YOUR ORIGINAL STYLES BELOW (UNCHANGED) ========== */

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 50,
//     backgroundColor: '#F3F4F6',
//   },

//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6',
//     padding: 20,
//   },

//   card: {
//     flexDirection: 'row',
//     width: '90%',
//     maxWidth: 900,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     elevation: 5,
//   },

//   /* LEFT PANEL */
//   leftPanel: {
//     width: '30%',
//     backgroundColor: '#4CAF50',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },

//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 12,
//   },

//   avatarText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },

//   role: {
//     fontSize: 14,
//     color: '#FFF7ED',
//     marginBottom: 20,
//   },

//   editIcon: {
//     marginTop: 10,
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//   },

//   editText: {
//     color: '#4CAF50',
//     fontWeight: 'bold',
//   },

//   /* RIGHT PANEL */
//   rightPanel: {
//     width: '70%',
//     padding: 20,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 16,
//   },

//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 14,
//   },

//   infoBlock: {
//     width: '48%',
//   },

//   infoBlockFull: {
//     marginTop: 10,
//   },

//   label: {
//     fontSize: 13,
//     color: '#6B7280',
//     marginBottom: 4,
//   },

//   value: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//   },
// });










import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';

const ElderProfileScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // ✅ Moved outside so useFocusEffect can call it
  const fetchProfile = async () => {
    try {
      setLoading(true);

      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Not logged in', 'Please login to view profile');
        setLoading(false);
        return;
      }

      // Fetch profile
      const response = await api.get('/elder/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfile(response.data);

    } catch (error: any) {
      console.log('PROFILE ERROR:', error);

      const msg =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to fetch profile';

      Alert.alert('Profile Error', msg);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Refresh profile EVERY time screen comes into focus
  useFocusEffect(
    useCallback(() => {
      fetchProfile();
    }, [])
  );

  // ====================== UI ========================

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: '#333' }}>No profile available.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        {/* LEFT PANEL */}
        <View style={styles.leftPanel}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {profile.name?.charAt(0) ?? 'A'}
            </Text>
          </View>

          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>Elder</Text>

          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => navigation.navigate('EditProfile' as never)}
          >
            <Text style={styles.editText}>✎ Edit</Text>
          </TouchableOpacity>
        </View>

        {/* RIGHT PANEL */}
        <View style={styles.rightPanel}>
          <Text style={styles.sectionTitle}>Profile</Text>

          <View style={styles.row}>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{profile.email}</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{profile.phone || 'N/A'}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.infoBlock}>
              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>{profile.age}</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.label}>Gender</Text>
              <Text style={styles.value}>{profile.gender}</Text>
            </View>
          </View>

          <View style={styles.infoBlockFull}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>{profile.address}</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default ElderProfileScreen;

/* ========== STYLES (UNCHANGED) ========== */

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#F3F4F6',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 20,
  },

  card: {
    flexDirection: 'row',
    width: '90%',
    maxWidth: 900,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
  },

  leftPanel: {
    width: '30%',
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  role: {
    fontSize: 14,
    color: '#FFF7ED',
    marginBottom: 20,
  },

  editIcon: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },

  editText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },

  rightPanel: {
    width: '70%',
    padding: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  infoBlock: {
    width: '48%',
  },

  infoBlockFull: {
    marginTop: 10,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});


