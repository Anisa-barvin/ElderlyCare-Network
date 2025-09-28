// Path: CompanionPlusApp/screens/common/HelpScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HelpScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help & Support</Text>
      <ScrollView style={styles.content}>
        <Text style={styles.sectionHeader}>Frequently Asked Questions (FAQ)</Text>
        <Text style={styles.faqText}>
          1. How do I log in to my account? {'\n'}
          Answer: You can log in by selecting either "Login as Elder" or "Login as Relation" from the login screen.
        </Text>
        <Text style={styles.faqText}>
          2. How can I request a caregiver? {'\n'}
          Answer: Navigate to the "Caregiver Matching" section and search for available caregivers. You can then request a caregiver based on your needs.
        </Text>
        <Text style={styles.faqText}>
          3. How can I set up health reminders? {'\n'}
          Answer: Go to the "Reminders" section, where you can add and manage health-related reminders.
        </Text>

        <Text style={styles.sectionHeader}>Contact Support</Text>
        <Text style={styles.helpText}>
          If you have any further questions or need assistance, feel free to contact our support team at support@companionplus.com.
        </Text>

        <Text style={styles.sectionHeader}>Feedback</Text>
        <Text style={styles.helpText}>
          We would love to hear your feedback to improve the app. Please send your thoughts to feedback@companionplus.com.
        </Text>

        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home" as never)} // Navigate to Home Screen
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 10,
  },
  content: {
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 10,
    marginTop: 20,
  },
  faqText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 10,
  },
  helpText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 15,
  },
});

export default HelpScreen;
