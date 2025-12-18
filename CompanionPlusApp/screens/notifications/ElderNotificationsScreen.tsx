import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
      <Text style={styles.title}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>
              ✅ <Text style={styles.bold}>{item.caregiverId.name}</Text> accepted your request
            </Text>
            <Text style={styles.sub}>
              Contact: {item.caregiverId.phone}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No notifications yet</Text>
        }
      />
    </View>
  );
};

export default ElderNotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F9FAFB' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#ECFDF5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  text: { fontSize: 16 },
  bold: { fontWeight: '700' },
  sub: { fontSize: 14, color: '#065F46', marginTop: 4 },
  empty: { textAlign: 'center', marginTop: 40, color: '#6B7280' },
});



