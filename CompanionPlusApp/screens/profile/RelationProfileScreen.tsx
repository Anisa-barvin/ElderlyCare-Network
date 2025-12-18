// // Path: CompanionPlusApp/screens/profile/RelationProfileScreen.tsx
// import React from 'react';
// import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const RelationProfileScreen = () => {
//   const navigation = useNavigation();

//   // Static profile data for the relation
//   const relationProfile = {
//     name: 'Jane Smith',
//     age: 45,
//     relationship: 'Daughter',
//     address: '456 Family St, City, Country',
//     contact: '1234567890',
//   };

//   // Navigate to the edit profile screen
//   const goToEditProfile = () => {
//     navigation.navigate("EditProfile" as never); // Adjust the route name if needed
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.profileContainer}>
//         <Text style={styles.profileTitle}>Relation Profile</Text>
//         <Text style={styles.profileText}>Name: {relationProfile.name}</Text>
//         <Text style={styles.profileText}>Age: {relationProfile.age}</Text>
//         <Text style={styles.profileText}>Relationship: {relationProfile.relationship}</Text>
//         <Text style={styles.profileText}>Address: {relationProfile.address}</Text>
//         <Text style={styles.profileText}>Contact: {relationProfile.contact}</Text>
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button title="Edit Profile" onPress={goToEditProfile} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },
//   profileContainer: {
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 5,
//   },
//   profileTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//     marginBottom: 10,
//   },
//   profileText: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 6,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

// export default RelationProfileScreen;


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RelationProfileScreen = () => {
  const navigation = useNavigation();

  // Same profile data (unchanged)
  const relationProfile = {
    name: 'Jane Smith',
    age: 45,
    relationship: 'Daughter',
    address: '456 Family St, City, Country',
    contact: '1234567890',
  };

  const goToEditProfile = () => {
    navigation.navigate('EditRelationProfileScreen' as never);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        {/* Avatar Section */}
        <View style={styles.leftSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {relationProfile.name.charAt(0)}
            </Text>
          </View>

          <Text style={styles.name}>{relationProfile.name}</Text>
          <Text style={styles.roleText}>{relationProfile.relationship}</Text>

          <TouchableOpacity style={styles.editBtn}
            onPress={() => navigation.navigate('EditRelationProfileScreen' as never)}>
            <Text style={styles.editBtnText}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View>

        {/* Details Section */}
        <View style={styles.rightSection}>
          <Text style={styles.sectionTitle}>Information</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>{relationProfile.age}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Relationship:</Text>
            <Text style={styles.value}>{relationProfile.relationship}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{relationProfile.address}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{relationProfile.contact}</Text>
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

export default RelationProfileScreen;

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },

  card: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 850,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  /* LEFT SIDE – Avatar */
  leftSection: {
    width: '35%',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#E5E7EB',
    paddingRight: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#475569',
  },

  name: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },

  roleText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 20,
  },

  editBtn: {
    backgroundColor: '#4FA3D1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
  },

  editBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  /* RIGHT SIDE – Details */
  rightSection: {
    width: '65%',
    paddingLeft: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#374151',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  label: {
    width: 120,
    fontSize: 16,
    color: '#6B7280',
    fontWeight: 'bold',
  },

  value: {
    fontSize: 16,
    color: '#111827',
    flexShrink: 1,
  },
});
