// Path: CompanionPlusApp/screens/profile/EditProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  // State to hold the editable profile data
  const [name, setName] = useState('Jane Smith');
  const [age, setAge] = useState('45');
  const [relationship, setRelationship] = useState('Daughter');
  const [address, setAddress] = useState('456 Family St, City, Country');
  const [contact, setContact] = useState('1234567890');

  // Save the profile changes
  const saveProfile = () => {
    // Here you can call an API to save the updated data
    // For now, we'll simply console.log the updated profile
    console.log('Profile Updated:', { name, age, relationship, address, contact });

    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Edit Profile</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Relationship"
          value={relationship}
          onChangeText={setRelationship}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Contact"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad"
        />
        
        <Button title="Save Changes" onPress={saveProfile} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default EditProfileScreen;
