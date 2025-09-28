import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

interface Appointment {
  appointmentId: string;
  doctorName: string;
  specialization: string;
  date: string;
  time: string;
  mode: string;
  status: string;
  location?: string;
  notes?: string;
  doctorImage?: string;
}

const mockAppointments: Appointment[] = [
  {
    appointmentId: 'APT001',
    doctorName: 'Dr. Meera Suresh',
    specialization: 'Cardiologist',
    date: '2025-05-05',
    time: '10:00 AM',
    mode: 'In-Person',
    status: 'Upcoming',
    location: 'Apollo Clinic, Chennai',
    notes: 'Bring previous reports',
    doctorImage: 'https://via.placeholder.com/60',
  },
  {
    appointmentId: 'APT002',
    doctorName: 'Dr. Ramesh Kumar',
    specialization: 'Neurologist',
    date: '2025-04-25',
    time: '3:00 PM',
    mode: 'Online',
    status: 'Completed',
    notes: 'Discuss test results',
    doctorImage: 'https://via.placeholder.com/60',
  },
  {
    appointmentId: 'APT002',
    doctorName: 'Dr.Arjun',
    specialization: 'Neurologist',
    date: '2025-04-25',
    time: '3:00 PM',
    mode: 'Online',
    status: 'Completed',
    notes: 'Discuss test results',
    doctorImage: 'https://via.placeholder.com/60',
  },
  {
    appointmentId: 'APT002',
    doctorName: 'Dr. Kumar',
    specialization: 'Neurologist',
    date: '2025-04-25',
    time: '3:00 PM',
    mode: 'Online',
    status: 'Completed',
    notes: 'Discuss test results',
    doctorImage: 'https://via.placeholder.com/60',
  },
];

const MyAppointmentsScreen = () => {
  const renderItem = ({ item }: { item: Appointment }) => (
    <View style={styles.card}>
      {item.doctorImage && (
        <Image source={{ uri: item.doctorImage }} style={styles.image} />
      )}
      <View style={styles.info}>
        <Text style={styles.doctorName}>{item.doctorName}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
        <Text style={styles.detail}>Date: {item.date}</Text>
        <Text style={styles.detail}>Time: {item.time}</Text>
        <Text style={styles.detail}>Mode: {item.mode}</Text>
        <Text style={styles.detail}>Status: {item.status}</Text>
        {item.location && <Text style={styles.detail}>Location: {item.location}</Text>}
        {item.notes && <Text style={styles.notes}>Notes: {item.notes}</Text>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Appointments</Text>
      <FlatList
        data={mockAppointments}
        keyExtractor={(item) => item.appointmentId}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default MyAppointmentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  detail: {
    fontSize: 13,
    marginBottom: 2,
  },
  notes: {
    fontSize: 12,
    marginTop: 4,
    fontStyle: 'italic',
    color: '#555',
  },
});
