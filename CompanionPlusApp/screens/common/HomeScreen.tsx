
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


