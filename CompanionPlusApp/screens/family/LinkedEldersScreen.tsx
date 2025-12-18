// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

// // Static data for elders
// const linkedElders = [
//   {
//     elderId: '1',
//     fullName: 'John Doe',
//     age: 75,
//     gender: 'Male',
//     relationship: 'Grandfather',
//     profileImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
//     phoneNumber: '+1 234 567 890',
//     location: 'New York, USA',
//     healthStatus: 'Stable',
//     emergencyContact: '+1 987 654 3210',
//   },
//   {
//     elderId: '2',
//     fullName: 'Jane Smith',
//     age: 80,
//     gender: 'Female',
//     relationship: 'Mother',
//     profileImageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
//     phoneNumber: '+1 234 567 8910',
//     location: 'California, USA',
//     healthStatus: 'Needs care',
//     emergencyContact: '+1 987 654 3220',
//   },
//   // Add more elder objects as needed
// ];

// // Elder item component
// const ElderItem = ({ elder }: { elder: typeof linkedElders[0] }) => {
//   const handlePress = () => {
//     Alert.alert(
//       'Elder Info',
//       `Name: ${elder.fullName}\nAge: ${elder.age}\nRelationship: ${elder.relationship}`,
//     );
//   };

//   return (
//     <TouchableOpacity style={styles.card} onPress={handlePress}>
//       <Image source={{ uri: elder.profileImageUrl }} style={styles.avatar} />
//       <View style={styles.infoContainer}>
//         <Text style={styles.name}>{elder.fullName}</Text>
//         <Text style={styles.details}>{`Age: ${elder.age}`}</Text>
//         <Text style={styles.details}>{`Relationship: ${elder.relationship}`}</Text>
//         <Text style={styles.details}>{`Location: ${elder.location}`}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// // Main LinkedEldersScreen Component
// const LinkedEldersScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Linked Elders</Text>
//       <FlatList
//         data={linkedElders}
//         renderItem={({ item }) => <ElderItem elder={item} />}
//         keyExtractor={(item) => item.elderId}
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 15,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   details: {
//     fontSize: 14,
//     color: '#555',
//   },
// });

// export default LinkedEldersScreen;



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
} from 'react-native';

// Static data for elders
const linkedElders = [
  {
    elderId: '1',
    fullName: 'John Doe',
    age: 75,
    gender: 'Male',
    relationship: 'Grandfather',
    profileImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    phoneNumber: '+1 234 567 890',
    location: 'New York, USA',
    healthStatus: 'Stable',
    emergencyContact: '+1 987 654 3210',
  },
  {
    elderId: '2',
    fullName: 'Jane Smith',
    age: 80,
    gender: 'Female',
    relationship: 'Mother',
    profileImageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    phoneNumber: '+1 234 567 8910',
    location: 'California, USA',
    healthStatus: 'Needs care',
    emergencyContact: '+1 987 654 3220',
  },
];

// Elder card component
const ElderItem = ({ elder }: { elder: typeof linkedElders[0] }) => {
  const scale = new Animated.Value(1);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.96, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start(() => {
      Alert.alert(
        'Elder Info',
        `Name: ${elder.fullName}\nAge: ${elder.age}\nRelationship: ${elder.relationship}`
      );
    });
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>

        <View style={styles.card}>
          {/* Profile Image */}
          <Image source={{ uri: elder.profileImageUrl }} style={styles.avatar} />

          {/* Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{elder.fullName}</Text>

            <View style={styles.tagRow}>
              <Text style={styles.tag}>{elder.relationship}</Text>
              <Text
                style={[
                  styles.healthTag,
                  elder.healthStatus === 'Stable'
                    ? styles.healthGood
                    : styles.healthWarning,
                ]}
              >
                {elder.healthStatus}
              </Text>
            </View>

            <Text style={styles.details}>📍 {elder.location}</Text>
            <Text style={styles.details}>📞 {elder.phoneNumber}</Text>
          </View>
        </View>

      </TouchableOpacity>
    </Animated.View>
  );
};

const LinkedEldersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linked Elders</Text>

      <FlatList
        data={linkedElders}
        renderItem={({ item }) => <ElderItem elder={item} />}
        keyExtractor={(item) => item.elderId}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F5',
    padding: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    borderLeftWidth: 6,
    borderLeftColor: '#4A90E2',
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginRight: 15,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222',
  },

  tagRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },

  tag: {
    backgroundColor: '#E0E7FF',
    color: '#3B4CCA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    fontSize: 13,
  },

  healthTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 13,
    color: '#fff',
  },

  healthGood: {
    backgroundColor: '#4CAF50',
  },

  healthWarning: {
    backgroundColor: '#E67E22',
  },

  details: {
    fontSize: 14,
    color: '#555',
  },
});

export default LinkedEldersScreen;
