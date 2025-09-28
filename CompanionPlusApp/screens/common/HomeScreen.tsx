/*
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to Companion+</Text>
      <Text style={styles.subtitle}>Your trusted elderly care companion.</Text>

      <View style={styles.buttonContainer}>
       
        <View style={styles.buttonSpacing}>
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate("ElderProfile" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Request Caregiver"
            onPress={() => navigation.navigate("SearchCaregivers" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Health Dashboard"
            onPress={() => navigation.navigate("HealthDashboard" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Emergency SOS"
            onPress={() => navigation.navigate("SOSButton" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Add Event"
            onPress={() => navigation.navigate("AddEventScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="View Calendar"
            onPress={() => navigation.navigate("CalendarScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Chat List"
            onPress={() => navigation.navigate("ChatListScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Help"
            onPress={() => navigation.navigate("HelpScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Settings"
            onPress={() => navigation.navigate("SettingsScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Book Consultation"
            onPress={() => navigation.navigate("BookConsultationScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="Doctor List"
            onPress={() => navigation.navigate("DoctorListScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="My Appointments"
            onPress={() => navigation.navigate("MyAppointmentsScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="LINK ELDER"
            onPress={() => navigation.navigate("LinkedEldersScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="RELATION"
            onPress={() => navigation.navigate("RelationDashboardScreen" as never)}
          />
        </View>


        <View style={styles.buttonSpacing}>
          <Button
            title="ADD REMINDER"
            onPress={() => navigation.navigate("AddReminderScreen" as never)}
          />
        </View>


        <View style={styles.buttonSpacing}>
          <Button
            title="REMINDER LIST"
            onPress={() => navigation.navigate("RemindersListScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="BOOKING"
            onPress={() => navigation.navigate("BookingHistoryScreen" as never)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button
            title="TRANSPORT"
            onPress={() => navigation.navigate("TransportRequestScreen" as never)}
          />
        </View>

        
        <View style={styles.buttonSpacing}>
          <Button
            title="RESOURCES"
            onPress={() => navigation.navigate("ResourceDetailsScreen" as never)}
          />
        </View>

        
        <View style={styles.buttonSpacing}>
          <Button
            title="WELLNESS"
            onPress={() => navigation.navigate("WellnessResourcesScreen" as never)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B5563',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#6B7280',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonSpacing: {
    width: '100%',
    marginVertical: 10,
  },
});

export default HomeScreen;


*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './HomeScreenStyles';

// Import your screens
import ElderProfile from '../profile/ElderProfileScreen';
import SearchCaregivers from '../caregiver/SearchCaregiversScreen';
import HealthDashboard from '../health/HealthDashboardScreen';
import SOSButton from '../emergency/SOSButtonScreen';
import AddEventScreen from '../calendar/AddEventScreen';
import CalendarScreen from '../calendar/CalendarScreen';
import ChatListScreen from '../chat/ChatListScreen';
import HelpScreen from './HelpScreen';
import SettingsScreen from './SettingsScreen';
import BookConsultationScreen from '../doctor/BookConsultationScreen';
import DoctorListScreen from '../doctor/DoctorListScreen';
import MyAppointmentsScreen from '../doctor/MyAppointmentsScreen';
import LinkedEldersScreen from '../family/LinkedEldersScreen';
import RelationDashboardScreen from '../family/RelationDashboardScreen';
import AddReminderScreen from '../reminders/AddReminderScreen';
import RemindersListScreen from '../reminders/RemindersListScreen';
import BookingHistoryScreen from '../transport/BookingHistoryScreen';
import TransportRequestScreen from '../transport/TransportRequestScreen';
import ResourceDetailsScreen from '../wellness/ResourceDetailsScreen';
import WellnessResourcesScreen from '../wellness/WellnessResourcesScreen';

const HomeScreen: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>('Home');

  const renderContent = () => {
    switch (selectedScreen) {
      case 'ElderProfile':
        return <ElderProfile />;
      case 'SearchCaregivers':
        return <SearchCaregivers />;
      case 'HealthDashboard':
        return <HealthDashboard />;
      case 'SOSButton':
        return <SOSButton />;
      case 'AddEventScreen':
        return <AddEventScreen />;
      case 'CalendarScreen':
        return <CalendarScreen />;
      case 'ChatListScreen':
        return <ChatListScreen />;
      case 'HelpScreen':
        return <HelpScreen />;
      case 'SettingsScreen':
        return <SettingsScreen />;
      case 'BookConsultationScreen':
        return <BookConsultationScreen />;
      case 'DoctorListScreen':
        return <DoctorListScreen />;
      case 'MyAppointmentsScreen':
        return <MyAppointmentsScreen />;
      case 'LinkedEldersScreen':
        return <LinkedEldersScreen />;
      case 'RelationDashboardScreen':
        return <RelationDashboardScreen />;
      case 'AddReminderScreen':
        return <AddReminderScreen />;
      case 'RemindersListScreen':
        return <RemindersListScreen />;
      case 'BookingHistoryScreen':
        return <BookingHistoryScreen />;
      case 'TransportRequestScreen':
        return <TransportRequestScreen />;
      case 'ResourceDetailsScreen':
        return <ResourceDetailsScreen />;
      case 'WellnessResourcesScreen':
        return <WellnessResourcesScreen />;
      default:
        return (
          <View style={styles.mainContent}>
            <Text style={styles.header}>Welcome to Companion+</Text>
            <Text style={styles.subtitle}>Your trusted elderly care companion.</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <ScrollView style={styles.sidebar}>
        <Text style={styles.sidebarHeader}>Menu</Text>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('ElderProfile')}>
          <Text style={styles.sidebarButtonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('SearchCaregivers')}>
          <Text style={styles.sidebarButtonText}>Request Caregiver</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('HealthDashboard')}>
          <Text style={styles.sidebarButtonText}>Health Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('SOSButton')}>
          <Text style={styles.sidebarButtonText}>Emergency SOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('AddEventScreen')}>
          <Text style={styles.sidebarButtonText}>Add Event</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('CalendarScreen')}>
          <Text style={styles.sidebarButtonText}>Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('ChatListScreen')}>
          <Text style={styles.sidebarButtonText}>Chat List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('HelpScreen')}>
          <Text style={styles.sidebarButtonText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('SettingsScreen')}>
          <Text style={styles.sidebarButtonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('BookConsultationScreen')}>
          <Text style={styles.sidebarButtonText}>Book Consultation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('DoctorListScreen')}>
          <Text style={styles.sidebarButtonText}>Doctor List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('MyAppointmentsScreen')}>
          <Text style={styles.sidebarButtonText}>My Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('LinkedEldersScreen')}>
          <Text style={styles.sidebarButtonText}>Linked Elders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('RelationDashboardScreen')}>
          <Text style={styles.sidebarButtonText}>Relation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('AddReminderScreen')}>
          <Text style={styles.sidebarButtonText}>Add Reminder</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('RemindersListScreen')}>
          <Text style={styles.sidebarButtonText}>Reminder List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('BookingHistoryScreen')}>
          <Text style={styles.sidebarButtonText}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('TransportRequestScreen')}>
          <Text style={styles.sidebarButtonText}>Transport</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('ResourceDetailsScreen')}>
          <Text style={styles.sidebarButtonText}>Resources</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarButton} onPress={() => setSelectedScreen('WellnessResourcesScreen')}>
          <Text style={styles.sidebarButtonText}>Wellness</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Main Content */}
      <View style={styles.mainContent}>{renderContent()}</View>
    </View>
  );
};

export default HomeScreen;
