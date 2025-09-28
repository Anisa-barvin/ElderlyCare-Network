// Path: CompanionPlusApp/screens/common/SettingsScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  // Function to handle log out
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => navigation.navigate("LoginAsElder" as never) } // Navigate to Login screen
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.subtitle}>Manage your app preferences</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Change Profile"
          onPress={() => navigation.navigate("EditProfile" as never)} // Navigate to Edit Profile screen
        />
        <br></br>
        <Button
          title="Notifications Settings"
          onPress={() => navigation.navigate("HealthDashboard" as never)} // Example, navigate to Health Dashboard or Settings
        />
        <br></br>
        <Button
          title="Change Password"
          onPress={() => navigation.navigate("HealthDashboard" as never)} // Example, navigate to relevant screen
        />
        <br></br>
        <Button
          title="Log Out"
          onPress={handleLogout} // Handle logout functionality
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#6B7280',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default SettingsScreen;
