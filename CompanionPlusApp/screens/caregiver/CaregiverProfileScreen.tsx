import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';

const CaregiverProfileScreen = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        const res = await api.get('/caregiver/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile(res.data);
      } catch (err) {
        console.log('CARE GIVER PROFILE ERROR:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.center}>
        <Text>No profile data found</Text>
      </View>
    );
  }

  const firstLetter = profile.name?.charAt(0).toUpperCase();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* PROFILE CARD */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>

        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>Caregiver</Text>
      </View>

      {/* DETAILS */}
      <View style={styles.detailsCard}>
        <Info label="Email" value={profile.email} />
        <Info label="Phone" value={profile.phone} />
        <Info label="Specialty" value={profile.specialty} />
        <Info label="Experience" value={`${profile.experience} years`} />
        <Info label="Location" value={profile.location} />
        <Info label="Gender" value={profile.gender} />
      </View>
    </ScrollView>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value || 'N/A'}</Text>
  </View>
);

export default CaregiverProfileScreen;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    padding: 20,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileCard: {
    width: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 18,
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  role: {
    fontSize: 14,
    color: '#DBEAFE',
    marginTop: 4,
  },

  detailsCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    elevation: 4,
  },

  infoRow: {
    marginBottom: 14,
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});
