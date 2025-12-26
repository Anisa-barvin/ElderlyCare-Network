import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const CaregiverHelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Caregiver Help</Text>
        <Text style={styles.headerSubtitle}>
          Learn how to use Companion+ effectively
        </Text>
      </View>

      {/* PROFILE HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>👤 Profile Management</Text>
        <Text style={styles.text}>• Keep your profile updated with correct details.</Text>
        <Text style={styles.text}>• Add your specialty and experience clearly.</Text>
        <Text style={styles.text}>• Update phone number and location if changed.</Text>
      </View>

      {/* REQUEST HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📩 Elder Requests</Text>
        <Text style={styles.text}>• Elders may send care requests to you.</Text>
        <Text style={styles.text}>• Review elder details before accepting.</Text>
        <Text style={styles.text}>• Once accepted, elders will be notified.</Text>
      </View>

      {/* NOTIFICATION HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🔔 Notifications</Text>
        <Text style={styles.text}>• Notifications show new care requests.</Text>
        <Text style={styles.text}>• Open notifications to respond quickly.</Text>
        <Text style={styles.text}>• Keep notifications enabled for updates.</Text>
      </View>

      {/* CHAT HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>💬 Chat Usage</Text>
        <Text style={styles.text}>• Chat with elders after accepting requests.</Text>
        <Text style={styles.text}>• Messages appear instantly.</Text>
        <Text style={styles.text}>• Scroll down to see the latest messages.</Text>
      </View>

      {/* PASSWORD HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🔑 Password & Security</Text>
        <Text style={styles.text}>• Use a strong password.</Text>
        <Text style={styles.text}>• Change password regularly.</Text>
        <Text style={styles.text}>• Never share your login details.</Text>
      </View>

      {/* SAFETY */}
      

    </ScrollView>
  );
};

export default CaregiverHelpScreen;

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: '#b1c9e1ff',
  },

  header: {
    backgroundColor: '#2563EB',
    padding: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  headerSubtitle: {
    fontSize: 15,
    color: '#DBEAFE',
    marginTop: 6,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  text: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 24,
  },

  safetyCard: {
    backgroundColor: '#FFF7ED',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 20,
    marginTop: 10,
  },

  safetyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#9A3412',
    marginBottom: 6,
  },

  safetyText: {
    fontSize: 15,
    color: '#7C2D12',
    lineHeight: 22,
  },
});
