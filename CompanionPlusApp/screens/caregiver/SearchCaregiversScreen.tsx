
  // // Path: CompanionPlusApp/screens/caregivers/SearchCaregiversScreen.tsx
  // import React, { useState } from 'react';
  // import {
  //   View,
  //   Text,
  //   TextInput,
  //   FlatList,
  //   TouchableOpacity,
  //   StyleSheet,
  //   Image,
  // } from 'react-native';
  // import { useNavigation } from '@react-navigation/native';

  // const caregiversData = [
  //   { id: '1', name: 'Archana', specialty: 'Elder Care', location: 'New York', experience: '5 years' },
  //   { id: '2', name: 'Anika', specialty: 'Health Monitoring', location: 'California', experience: '3 years' },
  //   { id: '3', name: 'Anisa', specialty: 'Physical Therapy', location: 'Texas', experience: '4 years' },
  //   { id: '4', name: 'Hema', specialty: 'Nursing', location: 'Florida', experience: '7 years' },
  //   { id: '5', name: 'Dhivya', specialty: 'Elder Care', location: 'Nevada', experience: '6 years' },
  // ];

  // const SearchCaregiversScreen = () => {
  //   const [searchText, setSearchText] = useState('');
  //   const navigation = useNavigation();

  //   const filteredCaregivers = caregiversData.filter(caregiver =>
  //     caregiver.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //     caregiver.specialty.toLowerCase().includes(searchText.toLowerCase())
  //   );

  //   const handleCaregiverPress = (caregiverId: string) => {
  //     navigation.navigate('CaregiverDetails' as never);
  //   };

  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>Find Your Caregiver</Text>
  //       <Text style={styles.subtitle}>Search by name or specialty</Text>

  //       {/* Search Input */}
  //       <View style={styles.searchBox}>
  //         <TextInput
  //           style={styles.searchInput}
  //           placeholder="🔍 Search caregivers..."
  //           value={searchText}
  //           onChangeText={setSearchText}
  //         />
  //       </View>

  //       {/* Caregiver Cards */}
  //       <FlatList
  //         data={filteredCaregivers}
  //         keyExtractor={item => item.id}
  //         renderItem={({ item }) => (
  //           <TouchableOpacity
  //             style={styles.card}
  //             onPress={() => handleCaregiverPress(item.id)}
  //           >
  //             {/* Left Avatar */}
  //             <View style={styles.avatarContainer}>
  //               <Image
  //                 source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
  //                 style={styles.avatar}
  //               />
  //             </View>

  //             {/* Right Info */}
  //             <View style={styles.cardInfo}>
  //               <Text style={styles.name}>{item.name}</Text>

  //               <View style={styles.badge}>
  //                 <Text style={styles.badgeText}>{item.specialty}</Text>
  //               </View>

  //               <Text style={styles.detail}>📍 {item.location}</Text>
  //               <Text style={styles.detail}>⏳ {item.experience}</Text>
  //             </View>
  //           </TouchableOpacity>
  //         )}
  //         ListEmptyComponent={
  //           <Text style={styles.noResultsText}>No caregivers found ❌</Text>
  //         }
  //       />
  //     </View>
  //   );
  // };

  // export default SearchCaregiversScreen;

  // /* ---------- STYLES ---------- */

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 18,
  //     backgroundColor: '#F0F4F8',
  //   },

  //   title: {
  //     fontSize: 28,
  //     fontWeight: 'bold',
  //     color: '#1F2937',
  //     textAlign: 'center',
  //   },

  //   subtitle: {
  //     fontSize: 16,
  //     color: '#6B7280',
  //     textAlign: 'center',
  //     marginBottom: 20,
  //   },

  //   searchBox: {
  //     backgroundColor: '#FFF',
  //     padding: 8,
  //     borderRadius: 10,
  //     elevation: 3,
  //     marginBottom: 18,
  //   },

  //   searchInput: {
  //     fontSize: 16,
  //     padding: 8,
  //   },

  //   /* Card Layout */
  //   card: {
  //     flexDirection: 'row',
  //     backgroundColor: '#FFFFFF',
  //     padding: 14,
  //     borderRadius: 12,
  //     marginBottom: 14,
  //     elevation: 4,
  //     shadowColor: '#000',
  //   },

  //   avatarContainer: {
  //     marginRight: 12,
  //   },

  //   avatar: {
  //     width: 60,
  //     height: 60,
  //     borderRadius: 30,
  //   },

  //   cardInfo: {
  //     flex: 1,
  //     justifyContent: 'center',
  //   },

  //   name: {
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //     color: '#1F2937',
  //   },

  //   badge: {
  //     alignSelf: 'flex-start',
  //     backgroundColor: '#D1FAE5',
  //     paddingVertical: 4,
  //     paddingHorizontal: 10,
  //     borderRadius: 12,
  //     marginVertical: 6,
  //   },

  //   badgeText: {
  //     color: '#059669',
  //     fontSize: 13,
  //     fontWeight: '600',
  //   },

  //   detail: {
  //     fontSize: 14,
  //     color: '#4B5563',
  //     marginVertical: 2,
  //   },

  //   noResultsText: {
  //     textAlign: 'center',
  //     marginTop: 20,
  //     fontSize: 18,
  //     color: '#9CA3AF',
  //   },
  // });





// // Path: CompanionPlusApp/screens/caregivers/SearchCaregiversScreen.tsx

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import api from '../../utils/api';

// const SearchCaregiversScreen = () => {
//   const navigation = useNavigation();

//   const [searchText, setSearchText] = useState('');
//   const [caregivers, setCaregivers] = useState([]);

//   /* -------------------------
//      FETCH CAREGIVERS FROM API
//   ---------------------------- */
//   useEffect(() => {
//     const loadCaregivers = async () => {
//       try {
//         const res = await api.get("/caregivers");
//         setCaregivers(res.data);
//       } catch (error) {
//         console.log("Caregiver Fetch Error:", error);
//       }
//     };

//     loadCaregivers();
//   }, []);

//   /* -------------------------
//      FILTER LIST
//   ---------------------------- */
//   const filteredCaregivers = caregivers.filter(c =>
//     c.name?.toLowerCase().includes(searchText.toLowerCase()) ||
//     c.specialty?.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const handleCaregiverPress = (caregiverId: string) => {
//     navigation.navigate("CaregiverDetails" as never, { id: caregiverId });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Find Your Caregiver</Text>
//       <Text style={styles.subtitle}>Search by name or specialty</Text>

//       {/* Search Input */}
//       <View style={styles.searchBox}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="🔍 Search caregivers..."
//           value={searchText}
//           onChangeText={setSearchText}
//         />
//       </View>

//       {/* Caregiver Cards */}
//       <FlatList
//         data={filteredCaregivers}
//         keyExtractor={item => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => handleCaregiverPress(item._id)}
//           >
//             {/* Avatar */}
//             <View style={styles.avatarContainer}>
//               <Image
//                 source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
//                 style={styles.avatar}
//               />
//             </View>

//             {/* Information */}
//             <View style={styles.cardInfo}>
//               <Text style={styles.name}>{item.name}</Text>

//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>{item.specialty}</Text>
//               </View>

//               <Text style={styles.detail}>📍 {item.location}</Text>
//               <Text style={styles.detail}>⏳ {item.experience} Experience</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         ListEmptyComponent={
//           <Text style={styles.noResultsText}>No caregivers found ❌</Text>
//         }
//       />
//     </View>
//   );
// };

// export default SearchCaregiversScreen;

// /* ---------- STYLES ---------- */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 18,
//     backgroundColor: '#F0F4F8',
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1F2937',
//     textAlign: 'center',
//   },

//   subtitle: {
//     fontSize: 16,
//     color: '#6B7280',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   searchBox: {
//     backgroundColor: '#FFF',
//     padding: 8,
//     borderRadius: 10,
//     elevation: 3,
//     marginBottom: 18,
//   },

//   searchInput: {
//     fontSize: 16,
//     padding: 8,
//   },

//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     padding: 14,
//     borderRadius: 12,
//     marginBottom: 14,
//     elevation: 4,
//     shadowColor: '#000',
//   },

//   avatarContainer: {
//     marginRight: 12,
//   },

//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },

//   cardInfo: {
//     flex: 1,
//     justifyContent: 'center',
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1F2937',
//   },

//   badge: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#D1FAE5',
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//     borderRadius: 12,
//     marginVertical: 6,
//   },

//   badgeText: {
//     color: '#059669',
//     fontSize: 13,
//     fontWeight: '600',
//   },

//   detail: {
//     fontSize: 14,
//     color: '#4B5563',
//     marginVertical: 2,
//   },

//   noResultsText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 18,
//     color: '#9CA3AF',
//   },
// });





// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import api from '../../utils/api';

// // ⭐ ADD TYPE HERE
// type Caregiver = {
//   _id: string;
//   name: string;
//   specialty: string;
//   location: string;
//   experience: string;
// };

// const SearchCaregiversScreen = () => {
//   const navigation = useNavigation();

//   const [searchText, setSearchText] = useState('');
//   const [caregivers, setCaregivers] = useState<Caregiver[]>([]); // ⭐ FIXED

//   useEffect(() => {
//     const loadCaregivers = async () => {
//       try {
//         const res = await api.get("/caregivers");

//         setCaregivers(res.data); // ⭐ NO ERROR NOW
//       } catch (error) {
//         console.log("Caregiver Fetch Error:", error);
//       }
//     };

//     loadCaregivers();
//   }, []);

//   const filteredCaregivers = caregivers.filter(c =>
//     c.name?.toLowerCase().includes(searchText.toLowerCase()) ||
//     c.specialty?.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const handleCaregiverPress = (caregiverId: string) => {
//     navigation.navigate("CaregiverDetails" as never, { id: caregiverId });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Find Your Caregiver</Text>
//       <Text style={styles.subtitle}>Search by name or specialty</Text>

//       {/* Search Box */}
//       <View style={styles.searchBox}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="🔍 Search caregivers..."
//           value={searchText}
//           onChangeText={setSearchText}
//         />
//       </View>

//       {/* Caregiver List */}
//       <FlatList
//         data={filteredCaregivers}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => handleCaregiverPress(item._id)}
//           >
//             {/* Avatar */}
//             <View style={styles.avatarContainer}>
//               <Image
//                 source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
//                 style={styles.avatar}
//               />
//             </View>

//             {/* Info */}
//             <View style={styles.cardInfo}>
//               <Text style={styles.name}>{item.name}</Text>

//               <View style={styles.badge}>
//                 <Text style={styles.badgeText}>{item.specialty}</Text>
//               </View>

//               <Text style={styles.detail}>📍 {item.location}</Text>
//               <Text style={styles.detail}>⏳ {item.experience} Experience</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         ListEmptyComponent={
//           <Text style={styles.noResultsText}>No caregivers found ❌</Text>
//         }
//       />
//     </View>
//   );
// };

// export default SearchCaregiversScreen;

// /* ---------- STYLES ---------- */

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 18, backgroundColor: '#F0F4F8' },
//   title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#1F2937' },
//   subtitle: { fontSize: 16, textAlign: 'center', color: '#6B7280', marginBottom: 20 },
//   searchBox: { backgroundColor: '#FFF', padding: 8, borderRadius: 10, elevation: 3, marginBottom: 18 },
//   searchInput: { fontSize: 16, padding: 8 },
//   card: { flexDirection: 'row', backgroundColor: '#FFF', padding: 14, borderRadius: 12, elevation: 4, marginBottom: 14 },
//   avatarContainer: { marginRight: 12 },
//   avatar: { width: 60, height: 60, borderRadius: 30 },
//   cardInfo: { flex: 1, justifyContent: 'center' },
//   name: { fontSize: 20, fontWeight: 'bold', color: '#1F2937' },
//   badge: { backgroundColor: '#D1FAE5', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, marginVertical: 6 },
//   badgeText: { color: '#059669', fontSize: 13, fontWeight: '600' },
//   detail: { fontSize: 14, color: '#4B5563', marginVertical: 2 },
//   noResultsText: { textAlign: 'center', marginTop: 20, fontSize: 18, color: '#9CA3AF' },
// });



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../utils/api';

interface Caregiver {
  _id: string;
  name: string;
  specialty: string;
  location: string;
  experience: string;
  phone: string;
  gender: string;
  email: string;
  rating: string;
}

const SearchCaregiversScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);

  /* -------------------------
     FETCH CAREGIVERS FROM API
  ---------------------------- */
  useEffect(() => {
    const loadCaregivers = async () => {
      try {
        const res = await api.get("/caregivers");
        console.log("Caregivers Loaded:", res.data);
        setCaregivers(res.data);
      } catch (error) {
        console.log("Caregiver Fetch Error:", error);
      }
    };

    loadCaregivers();
  }, []);

  /* -------------------------
     FILTER LIST
  ---------------------------- */
  const filteredCaregivers = caregivers.filter(c =>
    c.name?.toLowerCase().includes(searchText.toLowerCase()) ||
    c.specialty?.toLowerCase().includes(searchText.toLowerCase()) ||
    c.location?.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCaregiverPress = (caregiverId: string) => {
    navigation.navigate("CaregiverDetails" as never, {  caregiverId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Caregiver</Text>
      <Text style={styles.subtitle}>Search by name, specialty, or location</Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Search caregivers..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* List */}
      <FlatList
        data={filteredCaregivers}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCaregiverPress(item._id)}
          >
            {/* Avatar */}
            <Image
              source={{ uri: "https://i.pravatar.cc/100?img=5" }}
              style={styles.avatar}
            />

            {/* Details */}
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>

              
              <Text style={styles.detail}>📍 Location: {item.location}</Text>
              <Text style={styles.detail}>⏳ Experience: {item.experience}</Text>
              <Text style={styles.detail}>📞 Phone: {item.phone}</Text>
              <Text style={styles.detail}>👤 Gender: {item.gender}</Text>
              <Text style={styles.detail}>✉️ Email: {item.email}</Text>
              
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>No caregivers found ❌</Text>
        }
      />
    </View>
  );
};

export default SearchCaregiversScreen;

/* ------------------- STYLES ------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F0F4F8',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },

  searchBox: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
  },

  searchInput: {
    fontSize: 16,
    padding: 8,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
    elevation: 4,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },

  detail: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 3,
  },

  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#9CA3AF',
  },
});
