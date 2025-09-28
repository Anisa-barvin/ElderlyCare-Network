import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

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
  // Add more elder objects as needed
];

// Elder item component
const ElderItem = ({ elder }: { elder: typeof linkedElders[0] }) => {
  const handlePress = () => {
    Alert.alert(
      'Elder Info',
      `Name: ${elder.fullName}\nAge: ${elder.age}\nRelationship: ${elder.relationship}`,
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: elder.profileImageUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{elder.fullName}</Text>
        <Text style={styles.details}>{`Age: ${elder.age}`}</Text>
        <Text style={styles.details}>{`Relationship: ${elder.relationship}`}</Text>
        <Text style={styles.details}>{`Location: ${elder.location}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Main LinkedEldersScreen Component
const LinkedEldersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linked Elders</Text>
      <FlatList
        data={linkedElders}
        renderItem={({ item }) => <ElderItem elder={item} />}
        keyExtractor={(item) => item.elderId}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});

export default LinkedEldersScreen;
