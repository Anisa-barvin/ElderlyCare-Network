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
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
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
    doctorId: 'doc3',
    name: 'Dr. Arjun',
    specialization: 'Cardiologist',
    experience: '12 years',
    qualification: 'MBBS, DM',
    location: 'Coimbatore',
    rating: 4.8,
    consultationFee: 550,
  },
  
];

const DoctorListScreen = () => {
  const navigation = useNavigation<any>();

  const renderDoctorCard = ({ item }: { item: Doctor }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('BookConsultationScreen', { doctorId: item.doctorId })
      }
    >
      {/* Doctor Image */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>

        <Text style={styles.details}>
          🎓 {item.qualification}
        </Text>

        <Text style={styles.details}>
          🧑‍⚕️ {item.experience} Experience
        </Text>

        <Text style={styles.details}>
          📍 {item.location}
        </Text>

        <Text style={styles.rating}>
          ⭐ {item.rating}  
          <Text style={styles.fee}>   ₹{item.consultationFee}</Text>
        </Text>

        {/* Book Button */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() =>
            navigation.navigate('BookConsultationScreen', { doctorId: item.doctorId })
          }
        >
          <Text style={styles.bookText}>Book Appointment</Text>
        </TouchableOpacity>
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DoctorListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#111827',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 20,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginRight: 16,
    backgroundColor: '#E5E7EB',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  specialization: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 6,
  },
  details: {
    fontSize: 14,
    color: '#374151',
    marginTop: 2,
  },
  rating: {
    marginTop: 6,
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
  },
  fee: {
    color: '#10B981',
    fontWeight: 'bold',
  },
  bookButton: {
    marginTop: 10,
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: 150,
  },
  bookText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
