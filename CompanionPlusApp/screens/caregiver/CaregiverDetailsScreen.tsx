// Path: CompanionPlusApp/screens/caregivers/CaregiverDetailsScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'; // Corrected import
import { StackNavigationProp } from '@react-navigation/stack'; // Corrected import
import { RootStackParamList } from '../../navigation/RootNavigator'; 

// Define the route prop type
type CaregiverDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CaregiverDetails'>;

const CaregiverDetailsScreen = ({ route }: { route: CaregiverDetailsScreenRouteProp }) => {
  const { caregiverId } = route.params;

  // Simulate fetching caregiver data (in a real app, you'd fetch data from the backend)
  const caregiver = {
    id: caregiverId,
    name: 'Archana',
    specialty: 'Health Monitoring',
    experience: '3 years',
    location: 'Chennai',
    contact: '123-456-7890',
    about: 'Experienced in monitoring health metrics and providing emergency alerts. Specialized in elderly care.',
  };

  // Correct usage of useNavigation with StackNavigationProp for type safety
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Handle caregiver request
  const handleRequestCaregiver = () => {
    // Navigate to the RequestCaregiverScreen
    navigation.navigate('RequestCaregiver', { caregiverId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{caregiver.name}</Text>
      <Text style={styles.specialty}>{caregiver.specialty}</Text>
      <Text style={styles.experience}>Experience: {caregiver.experience}</Text>
      <Text style={styles.location}>Location: {caregiver.location}</Text>
      <Text style={styles.contact}>Contact: {caregiver.contact}</Text>
      <Text style={styles.about}>{caregiver.about}</Text>

      <Button
        title="Request Caregiver"
        onPress={handleRequestCaregiver}
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  specialty: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  experience: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  about: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
});

export default CaregiverDetailsScreen;
