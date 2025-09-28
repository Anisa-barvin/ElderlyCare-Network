import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

interface Booking {
  id: string;
  transportType: string;
  from: string;
  to: string;
  date: string;
  time: string;
  status: string;
}

const bookings: Booking[] = [
  {
    id: '1',
    transportType: 'Bus',
    from: 'Chennai',
    to: 'Madurai',
    date: '2025-05-02',
    time: '10:00 AM',
    status: 'Confirmed',
  },
  {
    id: '2',
    transportType: 'Train',
    from: 'Coimbatore',
    to: 'Bangalore',
    date: '2025-05-03',
    time: '4:30 PM',
    status: 'Cancelled',
  },
  {
    id: '3',
    transportType: 'Taxi',
    from: 'Trichy',
    to: 'Chennai',
    date: '2025-05-04',
    time: '7:15 AM',
    status: 'Completed',
  },
];

const BookingHistoryScreen = () => {
  const renderItem = ({ item }: { item: Booking }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.transportType} Booking</Text>
      <Text style={styles.details}>From: {item.from}</Text>
      <Text style={styles.details}>To: {item.to}</Text>
      <Text style={styles.details}>Date: {item.date}</Text>
      <Text style={styles.details}>Time: {item.time}</Text>
      <Text style={[styles.status, getStatusStyle(item.status)]}>
        Status: {item.status}
      </Text>
    </View>
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return { color: 'green' };
      case 'Cancelled':
        return { color: 'red' };
      case 'Completed':
        return { color: 'blue' };
      default:
        return { color: 'black' };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Booking History</Text>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#1f2937',
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#4b5563',
  },
  status: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default BookingHistoryScreen;
