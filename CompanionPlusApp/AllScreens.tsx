import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const createScreen = (screenName: string) => () => (
  <View style={styles.container}>
    <Text style={styles.text}>{screenName}</Text>
  </View>
);

// 🔐 Authentication Screens
export const LoginAsElderScreen = createScreen("Login As Elder");
export const LoginAsRelationScreen = createScreen("Login As Relation");
export const RegisterAsElderScreen = createScreen("Register As Elder");
export const RegisterAsRelationScreen = createScreen("Register As Relation");
export const SplashScreen = createScreen("Splash Screen");

// 👤 Profile & User Info
export const ElderProfileScreen = createScreen("Elder Profile");
export const RelationProfileScreen = createScreen("Relation Profile");
export const EditProfileScreen = createScreen("Edit Profile");

// 🧑‍⚕️ Caregiver Matching
export const SearchCaregiversScreen = createScreen("Search Caregivers");
export const CaregiverDetailsScreen = createScreen("Caregiver Details");
export const RequestCaregiverScreen = createScreen("Request Caregiver");

// 💬 Chat & Alerts
export const ChatListScreen = createScreen("Chat List");
export const ChatRoomScreen = createScreen("Chat Room");
export const EmergencyAlertScreen = createScreen("Emergency Alert");

// ❤️ Health Monitoring
export const HealthDashboardScreen = createScreen("Health Dashboard");
export const AddHealthRecordScreen = createScreen("Add Health Record");
export const ViewHealthHistoryScreen = createScreen("View Health History");

// ⏰ Reminders
export const RemindersListScreen = createScreen("Reminders List");
export const AddReminderScreen = createScreen("Add Reminder");

// 👨‍👩‍👧‍👦 Family & Relations
export const RelationDashboardScreen = createScreen("Relation Dashboard");
export const LinkedEldersScreen = createScreen("Linked Elders");

// 🧑‍⚕️ Doctor Consultation
export const DoctorListScreen = createScreen("Doctor List");
export const BookConsultationScreen = createScreen("Book Consultation");
export const MyAppointmentsScreen = createScreen("My Appointments");

// 🚨 Emergency Button
export const SOSButtonScreen = createScreen("SOS Button");

// 🚌 Transportation Help
export const TransportRequestScreen = createScreen("Transport Request");
export const BookingHistoryScreen = createScreen("Booking History");

// 🧘 Wellness Resources
export const WellnessResourcesScreen = createScreen("Wellness Resources");
export const ResourceDetailsScreen = createScreen("Resource Details");

// 📅 Event Calendar
export const CalendarScreen = createScreen("Calendar");
export const AddEventScreen = createScreen("Add Event");

// ☰ Common Screens
export const HomeScreen = createScreen("Home");
export const SettingsScreen = createScreen("Settings");
export const HelpScreen = createScreen("Help");
export const NotFoundScreen = createScreen("Not Found");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
