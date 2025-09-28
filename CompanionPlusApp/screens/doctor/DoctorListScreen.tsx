// Path: CompanionPlusApp/screens/doctor/DoctorListScreen.tsx
/*
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../types/navigation'; // Adjust the path if needed
import axios from '../../utils/api'; // Axios instance

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience: number;
}

// Define navigation prop type for this screen
type DoctorListScreenNavigationProp = StackNavigationProp<StackParamList, 'DoctorListScreen'>;

const DoctorListScreen = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<DoctorListScreenNavigationProp>();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('/doctors'); // Adjust endpoint as per your backend
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderDoctor = ({ item }: { item: Doctor }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DoctorDetailsScreen', { doctorId: item._id })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detail}>Specialization: {item.specialization}</Text>
      <Text style={styles.detail}>Experience: {item.experience} years</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Doctors</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : doctors.length === 0 ? (
        <Text style={styles.emptyText}>No doctors available right now.</Text>
      ) : (
        <FlatList
          data={doctors}
          renderItem={renderDoctor}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default DoctorListScreen;
*/

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Doctor = {
  doctorId: string;
  name: string;
  specialization: string;
  experience: string;
  qualification: string;
  location: string;
  rating: number;
  consultationFee: number;
  // use require(...) for local images
};

const doctors: Doctor[] = [
  {
    doctorId: 'doc1',
    name: 'Dr. Anitha Kumar',
    specialization: 'Dermatologist',
    experience: '10 years',
    qualification: 'MBBS, MD',
    location: 'Chennai',
    rating: 4.7,
    consultationFee: 400,
  },
  {
    doctorId: 'doc2',
    name: 'Dr. Rajesh Iyer',
    specialization: 'Cardiologist',
    experience: '15 years',
    qualification: 'MBBS, DM',
    location: 'Coimbatore',
    rating: 4.9,
    consultationFee: 600,
  },
  {
    doctorId: 'doc2',
    name: 'Dr. Arjun',
    specialization: 'Cardiologist',
    experience: '15 years',
    qualification: 'MBBS, DM',
    location: 'Coimbatore',
    rating: 4.9,
    consultationFee: 600,
  },
  {
    doctorId: 'doc2',
    name: 'Dr. Vijay',
    specialization: 'Cardiologist',
    experience: '15 years',
    qualification: 'MBBS, DM',
    location: 'Coimbatore',
    rating: 4.9,
    consultationFee: 600,
  },
  // Add more static doctors here
];

const DoctorListScreen = () => {
  const navigation = useNavigation<any>();

  const renderDoctorCard = ({ item }: { item: Doctor }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BookConsultation', { doctorId: item.doctorId })}
    >
     
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
        <Text style={styles.details}>
          {item.experience} | {item.qualification}
        </Text>
        <Text style={styles.details}>
          Location: {item.location}
        </Text>
        <Text style={styles.details}>
          Rating: ⭐ {item.rating} | ₹{item.consultationFee}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Doctors</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.doctorId}
        renderItem={renderDoctorCard}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default DoctorListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  specialization: {
    fontSize: 16,
    color: '#666',
  },
  details: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },
});
