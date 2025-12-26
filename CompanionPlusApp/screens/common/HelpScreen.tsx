import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Help & Guide</Text>
        <Text style={styles.headerSubtitle}>
          Easy instructions to use Companion+
        </Text>
      </View>

      {/* HOW TO USE */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📘 How to Use the App</Text>

        <Text style={styles.text}>
          • Use the menu to navigate between features.
        </Text>
        <Text style={styles.text}>
          • Always tap the back button to return safely.
        </Text>
        <Text style={styles.text}>
          • Logout only when you finish using the app.
        </Text>
      </View>

      {/* CAREGIVER HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🧑‍⚕️ Caregiver Help</Text>

        <Text style={styles.text}>
          • Search caregivers by name or location.
        </Text>
        <Text style={styles.text}>
          • View caregiver details before sending a request.
        </Text>
        <Text style={styles.text}>
          • You will get a notification once your request is accepted.
        </Text>
      </View>

      {/* CHAT HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>💬 Chat Help</Text>

        <Text style={styles.text}>
          • Open Chat List to see other elders.
        </Text>
        <Text style={styles.text}>
          • Messages appear instantly in the chat screen.
        </Text>
        <Text style={styles.text}>
          • Scroll down to see latest messages like WhatsApp.
        </Text>
      </View>

      {/* REMINDER HELP */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>⏰ Reminder Help</Text>

        <Text style={styles.text}>
          • Use reminders for medicine, food, or appointments.
        </Text>
        <Text style={styles.text}>
          • You can edit or delete reminders anytime.
        </Text>
        <Text style={styles.text}>
          • Completed reminders will be marked automatically.
        </Text>
      </View>

      {/* SAFETY */}
      {/* <View style={styles.emergencyCard}>
        <Text style={styles.emergencyTitle}>🚨 Safety Tip</Text>
        <Text style={styles.emergencyText}>
          In emergency situations, use the SOS button immediately.
        </Text>
      </View> */}
    </ScrollView>
  );
};

export default HelpScreen;

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

  emergencyCard: {
    backgroundColor: '#FEF2F2',
    marginHorizontal: 16,
    borderRadius: 18,
    padding: 20,
    marginTop: 10,
  },

  emergencyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#DC2626',
    marginBottom: 6,
  },

  emergencyText: {
    fontSize: 15,
    color: '#7F1D1D',
  },
});
