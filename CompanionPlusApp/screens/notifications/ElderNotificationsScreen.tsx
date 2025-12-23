// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api';

// const ElderNotificationsScreen = () => {
//   const [notifications, setNotifications] = useState<any[]>([]);

//   useEffect(() => {
//     const loadNotifications = async () => {
//       const token = await AsyncStorage.getItem('token');

//       const res = await api.get('/requests/elder', {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setNotifications(res.data);
//     };

//     loadNotifications();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Notifications</Text>

//       <FlatList
//         data={notifications}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.text}>
//               ✅ <Text style={styles.bold}>{item.caregiverId.name}</Text> accepted your request
//             </Text>
//             <Text style={styles.sub}>
//               Contact: {item.caregiverId.phone}
//             </Text>
//           </View>
//         )}
//         ListEmptyComponent={
//           <Text style={styles.empty}>No notifications yet</Text>
//         }
//       />
//     </View>
//   );
// };

// export default ElderNotificationsScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#F9FAFB' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
//   card: {
//     backgroundColor: '#ECFDF5',
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 12,
//   },
//   text: { fontSize: 16 },
//   bold: { fontWeight: '700' },
//   sub: { fontSize: 14, color: '#065F46', marginTop: 4 },
//   empty: { textAlign: 'center', marginTop: 40, color: '#6B7280' },
// });


import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';

const ElderNotificationsScreen = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const loadNotifications = async () => {
      const token = await AsyncStorage.getItem('token');

      const res = await api.get('/requests/elder', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setNotifications(res.data);
    };

    loadNotifications();
  }, []);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.subtitle}>
        Updates about your caregiver requests
      </Text>

      {/* LIST */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* ICON */}
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>✅</Text>
            </View>

            {/* CONTENT */}
            <View style={styles.content}>
              <Text style={styles.text}>
                <Text style={styles.bold}>
                  {item.caregiverId.name}
                </Text>{' '}
                accepted your request
              </Text>

              <Text style={styles.sub}>
                📞 Contact: {item.caregiverId.phone}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔔</Text>
            <Text style={styles.emptyTitle}>
              No notifications yet
            </Text>
            <Text style={styles.emptySub}>
              You’ll see updates here when caregivers respond
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default ElderNotificationsScreen;

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b1c9e1ff', // soft blue background
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1E3A8A',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#ECFDF5',
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 4,
    alignItems: 'center',
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  icon: {
    fontSize: 22,
    color: '#FFFFFF',
  },

  content: {
    flex: 1,
  },

  text: {
    fontSize: 17,
    color: '#064E3B',
    lineHeight: 24,
  },

  bold: {
    fontWeight: '800',
  },

  sub: {
    fontSize: 14,
    color: '#065F46',
    marginTop: 6,
  },

  /* EMPTY STATE */
  emptyContainer: {
    alignItems: 'center',
    marginTop: 80,
    paddingHorizontal: 20,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 6,
  },

  emptySub: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
  },
});

