// Path: CompanionPlusApp/screens/relation/RelationDashboardScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RelationDashboardScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome to Your Dashboard</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('RelationProfileScreen')}
        >
          <Text style={styles.cardText}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('ElderProfileScreen')}
        >
          <Text style={styles.cardText}>View Elder Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('HealthDashboardScreen')}
        >
          <Text style={styles.cardText}>Health Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('RemindersListScreen')}
        >
          <Text style={styles.cardText}>Reminders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('EmergencyAlertScreen')}
        >
          <Text style={styles.cardText}>Emergency Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('ChatListScreen')}
        >
          <Text style={styles.cardText}>Messages</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F2F4F7',
    flexGrow: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E3A59',
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  card: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RelationDashboardScreen;
