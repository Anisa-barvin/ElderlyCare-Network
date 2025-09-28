// Path: CompanionPlusApp/screens/profile/ElderProfileScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ElderProfileScreen = () => {
  const navigation = useNavigation();

  // Static profile data for the elder
  const elderProfile = {
    name: 'Anisa',
    age: 25,
    gender: 'Female',
    address: 'Chennai',
    contact: '1234567890',
  };

  // Navigate to the edit profile screen
  const goToEditProfile = () => {
    navigation.navigate("EditProfile" as never); // Adjust the route name if needed
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Elder Profile</Text>
        <Text style={styles.profileText}>Name: {elderProfile.name}</Text>
        <Text style={styles.profileText}>Age: {elderProfile.age}</Text>
        <Text style={styles.profileText}>Gender: {elderProfile.gender}</Text>
        <Text style={styles.profileText}>Address: {elderProfile.address}</Text>
        <Text style={styles.profileText}>Contact: {elderProfile.contact}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={goToEditProfile} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  profileContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  profileText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ElderProfileScreen;
