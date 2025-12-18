// import React from 'react';
// import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

// interface Booking {
//   id: string;
//   transportType: string;
//   from: string;
//   to: string;
//   date: string;
//   time: string;
//   status: string;
// }

// const bookings: Booking[] = [
//   {
//     id: '1',
//     transportType: 'Bus',
//     from: 'Chennai',
//     to: 'Madurai',
//     date: '2025-05-02',
//     time: '10:00 AM',
//     status: 'Confirmed',
//   },
//   {
//     id: '2',
//     transportType: 'Train',
//     from: 'Coimbatore',
//     to: 'Bangalore',
//     date: '2025-05-03',
//     time: '4:30 PM',
//     status: 'Cancelled',
//   },
//   {
//     id: '3',
//     transportType: 'Taxi',
//     from: 'Trichy',
//     to: 'Chennai',
//     date: '2025-05-04',
//     time: '7:15 AM',
//     status: 'Completed',
//   },
// ];

// const BookingHistoryScreen = () => {
//   const renderItem = ({ item }: { item: Booking }) => (
//     <View style={styles.card}>
//       <Text style={styles.title}>{item.transportType} Booking</Text>
//       <Text style={styles.details}>From: {item.from}</Text>
//       <Text style={styles.details}>To: {item.to}</Text>
//       <Text style={styles.details}>Date: {item.date}</Text>
//       <Text style={styles.details}>Time: {item.time}</Text>
//       <Text style={[styles.status, getStatusStyle(item.status)]}>
//         Status: {item.status}
//       </Text>
//     </View>
//   );

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case 'Confirmed':
//         return { color: 'green' };
//       case 'Cancelled':
//         return { color: 'red' };
//       case 'Completed':
//         return { color: 'blue' };
//       default:
//         return { color: 'black' };
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Booking History</Text>
//       <FlatList
//         data={bookings}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     margin: 16,
//     color: '#1f2937',
//   },
//   list: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 4,
//   },
//   details: {
//     fontSize: 14,
//     color: '#4b5563',
//   },
//   status: {
//     fontSize: 14,
//     marginTop: 8,
//     fontWeight: 'bold',
//   },
// });

// export default BookingHistoryScreen;



import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'Bus':
        return <MaterialCommunityIcons name="bus" size={30} color="#2563eb" />;
      case 'Train':
        return <MaterialCommunityIcons name="train" size={30} color="#16a34a" />;
      case 'Taxi':
        return <MaterialCommunityIcons name="car" size={30} color="#f59e0b" />;
      default:
        return <MaterialCommunityIcons name="bus" size={30} color="gray" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const style = [
      styles.statusBadge,
      status === 'Confirmed' && styles.confirmed,
      status === 'Cancelled' && styles.cancelled,
      status === 'Completed' && styles.completed,
    ];

    return (
      <View style={style}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    );
  };

  const renderItem = ({ item }: { item: Booking }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>{getTransportIcon(item.transportType)}</View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.transportType} Booking</Text>

        <Text style={styles.details}>From: {item.from}</Text>
        <Text style={styles.details}>To: {item.to}</Text>

        <View style={styles.row}>
          <Text style={styles.details}>{item.date}</Text>
          <Text style={styles.details}>• {item.time}</Text>
        </View>

        {getStatusBadge(item.status)}
      </View>
    </View>
  );

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

export default BookingHistoryScreen;

/* ---------------------- STYLES ---------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2ff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 18,
    color: '#1e293b',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  iconContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  infoContainer: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },

  details: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 2,
  },

  row: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 8,
  },

  /* Status Badges */
  statusBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  confirmed: { backgroundColor: '#16a34a' },
  cancelled: { backgroundColor: '#dc2626' },
  completed: { backgroundColor: '#2563eb' },
});
