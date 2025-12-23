


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

// interface Caregiver {
//   _id: string;
//   name: string;
//   specialty: string;
//   location: string;
//   experience: string;
//   phone: string;
//   gender: string;
//   email: string;
//   rating: string;
// }

// const SearchCaregiversScreen = () => {
//   const navigation = useNavigation();
//   const [searchText, setSearchText] = useState('');
//   const [caregivers, setCaregivers] = useState<Caregiver[]>([]);

//   /* -------------------------
//      FETCH CAREGIVERS FROM API
//   ---------------------------- */
//   useEffect(() => {
//     const loadCaregivers = async () => {
//       try {
//         const res = await api.get("/caregivers");
//         console.log("Caregivers Loaded:", res.data);
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
//     c.specialty?.toLowerCase().includes(searchText.toLowerCase()) ||
//     c.location?.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const handleCaregiverPress = (caregiverId: string) => {
//     navigation.navigate("CaregiverDetails" as never, {  caregiverId });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Find Your Caregiver</Text>
//       <Text style={styles.subtitle}>Search by name, specialty, or location</Text>

//       {/* Search */}
//       <View style={styles.searchBox}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="🔍 Search caregivers..."
//           value={searchText}
//           onChangeText={setSearchText}
//         />
//       </View>

//       {/* List */}
//       <FlatList
//         data={filteredCaregivers}
//         keyExtractor={item => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => handleCaregiverPress(item._id)}
//           >
//             {/* Avatar */}
//             <Image
//               source={{ uri: "https://i.pravatar.cc/100?img=5" }}
//               style={styles.avatar}
//             />

//             {/* Details */}
//             <View style={styles.info}>
//               <Text style={styles.name}>{item.name}</Text>

              
//               <Text style={styles.detail}>📍 Location: {item.location}</Text>
//               <Text style={styles.detail}>⏳ Experience: {item.experience}</Text>
//               <Text style={styles.detail}>📞 Phone: {item.phone}</Text>
//               <Text style={styles.detail}>👤 Gender: {item.gender}</Text>
//               <Text style={styles.detail}>✉️ Email: {item.email}</Text>
              
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

// /* ------------------- STYLES ------------------- */

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
//     padding: 10,
//     borderRadius: 10,
//     elevation: 4,
//     marginBottom: 15,
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
//   },

//   avatar: {
//     width: 65,
//     height: 65,
//     borderRadius: 32.5,
//     marginRight: 12,
//   },

//   info: {
//     flex: 1,
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 5,
//   },

//   detail: {
//     fontSize: 14,
//     color: '#374151',
//     marginBottom: 3,
//   },

//   noResultsText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 18,
//     color: '#9CA3AF',
//   },
// });






import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
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

  /* ================= FETCH ================= */
  useEffect(() => {
    const loadCaregivers = async () => {
      try {
        const res = await api.get('/caregivers');
        setCaregivers(res.data);
      } catch (error) {
        console.log('Caregiver Fetch Error:', error);
      }
    };
    loadCaregivers();
  }, []);

  /* ================= FILTER ================= */
  const filteredCaregivers = caregivers.filter(c =>
    c.name?.toLowerCase().includes(searchText.toLowerCase()) ||
    c.specialty?.toLowerCase().includes(searchText.toLowerCase()) ||
    c.location?.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCaregiverPress = (caregiverId: string) => {
    navigation.navigate('CaregiverDetails' as never, { caregiverId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Caregiver</Text>
      <Text style={styles.subtitle}>Search by name, specialty, or location</Text>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Search caregivers..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filteredCaregivers}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          const firstLetter = item.name?.charAt(0).toUpperCase();

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCaregiverPress(item._id)}
            >
              {/* LETTER AVATAR */}
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{firstLetter}</Text>
              </View>

              {/* DETAILS */}
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.detail}>📍 Location: {item.location}</Text>
                <Text style={styles.detail}>⏳ Experience: {item.experience}</Text>
                <Text style={styles.detail}>📞 Phone: {item.phone}</Text>
                <Text style={styles.detail}>👤 Gender: {item.gender}</Text>
                <Text style={styles.detail}>✉️ Email: {item.email}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>No caregivers found ❌</Text>
        }
      />
    </View>
  );
};

export default SearchCaregiversScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#b1c9e1ff',
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
    borderRadius: 14,
    marginBottom: 14,
    elevation: 4,
    alignItems: 'center',
  },

  /* LETTER AVATAR */
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#6f91daff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
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
