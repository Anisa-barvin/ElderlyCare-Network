// Path: CompanionPlusApp/screens/caregivers/SearchCaregiversScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const caregiversData = [
  { id: '1', name: 'Archana', specialty: 'Elder Care', location: 'New York', experience: '5 years' },
  { id: '2', name: 'Anika', specialty: 'Health Monitoring', location: 'California', experience: '3 years' },
  { id: '3', name: 'Anisa', specialty: 'Physical Therapy', location: 'Texas', experience: '4 years' },
  { id: '4', name: 'hema', specialty: 'Nursing', location: 'Florida', experience: '7 years' },
  { id: '5', name: 'dhivya', specialty: 'Elder Care', location: 'Nevada', experience: '6 years' },
];

const SearchCaregiversScreen = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  // Filter caregivers based on search input
  const filteredCaregivers = caregiversData.filter(caregiver =>
    caregiver.name.toLowerCase().includes(searchText.toLowerCase()) ||
    caregiver.specialty.toLowerCase().includes(searchText.toLowerCase())
  );

  // Navigate to Caregiver Details screen
  const handleCaregiverPress = (caregiverId: string) => {
    navigation.navigate("CaregiverDetails" as never);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Caregivers</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or specialty"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredCaregivers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.caregiverItem}
            onPress={() => handleCaregiverPress(item.id)}
          >
            <Text style={styles.caregiverName}>{item.name}</Text>
            <Text style={styles.caregiverSpecialty}>{item.specialty}</Text>
            <Text style={styles.caregiverDetails}>{item.location} | {item.experience}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noResultsText}>No caregivers found</Text>}
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
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  caregiverItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  caregiverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  caregiverSpecialty: {
    fontSize: 16,
    color: '#888',
  },
  caregiverDetails: {
    fontSize: 14,
    color: '#555',
  },
  noResultsText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchCaregiversScreen;
