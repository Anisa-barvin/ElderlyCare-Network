// // Path: CompanionPlusApp/screens/common/HelpScreen.tsx

// import React from 'react';
// import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const HelpScreen: React.FC = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Help & Support</Text>
//       <ScrollView style={styles.content}>
//         <Text style={styles.sectionHeader}>Frequently Asked Questions (FAQ)</Text>
//         <Text style={styles.faqText}>
//           1. How do I log in to my account? {'\n'}
//           Answer: You can log in by selecting either "Login as Elder" or "Login as Relation" from the login screen.
//         </Text>
//         <Text style={styles.faqText}>
//           2. How can I request a caregiver? {'\n'}
//           Answer: Navigate to the "Caregiver Matching" section and search for available caregivers. You can then request a caregiver based on your needs.
//         </Text>
//         <Text style={styles.faqText}>
//           3. How can I set up health reminders? {'\n'}
//           Answer: Go to the "Reminders" section, where you can add and manage health-related reminders.
//         </Text>

//         <Text style={styles.sectionHeader}>Contact Support</Text>
//         <Text style={styles.helpText}>
//           If you have any further questions or need assistance, feel free to contact our support team at support@companionplus.com.
//         </Text>

//         <Text style={styles.sectionHeader}>Feedback</Text>
//         <Text style={styles.helpText}>
//           We would love to hear your feedback to improve the app. Please send your thoughts to feedback@companionplus.com.
//         </Text>

//         <Button
//           title="Back to Home"
//           onPress={() => navigation.navigate("Home" as never)} // Navigate to Home Screen
//         />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F9FAFB',
//   },
//   header: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#4B5563',
//     marginBottom: 10,
//   },
//   content: {
//     marginTop: 20,
//   },
//   sectionHeader: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#1F2937',
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   faqText: {
//     fontSize: 16,
//     color: '#6B7280',
//     marginBottom: 10,
//   },
//   helpText: {
//     fontSize: 16,
//     color: '#6B7280',
//     marginBottom: 15,
//   },
// });

// export default HelpScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HelpScreen: React.FC = () => {
  const navigation = useNavigation();

  // Accordion states
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>💬 Help & Support</Text>
      <Text style={styles.subheader}>We’re here to assist you</Text>

      <ScrollView style={styles.scroll}>

        {/* FAQ */}
        <Text style={styles.sectionHeader}>Frequently Asked Questions</Text>

        {/* Accordion 1 */}
        <TouchableOpacity style={styles.accordion} onPress={() => setOpen1(!open1)}>
          <Text style={styles.question}>
            1. How do I log in to my account?
          </Text>
          <Text style={styles.arrow}>{open1 ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {open1 && (
          <Text style={styles.answer}>
            You can log in by selecting "Login as Elder" or "Login as Relation".
          </Text>
        )}

        {/* Accordion 2 */}
        <TouchableOpacity style={styles.accordion} onPress={() => setOpen2(!open2)}>
          <Text style={styles.question}>
            2. How can I request a caregiver?
          </Text>
          <Text style={styles.arrow}>{open2 ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {open2 && (
          <Text style={styles.answer}>
            Go to the Caregiver Matching section, choose a caregiver, and send a request.
          </Text>
        )}

        {/* Accordion 3 */}
        <TouchableOpacity style={styles.accordion} onPress={() => setOpen3(!open3)}>
          <Text style={styles.question}>
            3. How can I set up health reminders?
          </Text>
          <Text style={styles.arrow}>{open3 ? "▲" : "▼"}</Text>
        </TouchableOpacity>
        {open3 && (
          <Text style={styles.answer}>
            Visit the Reminders section to add and manage your health reminders.
          </Text>
        )}

        {/* Contact Box */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📞 Contact Support</Text>
          <Text style={styles.cardText}>
            If you need more assistance, reach us at:
          </Text>
          <Text style={styles.cardEmail}>support@companionplus.com</Text>
        </View>

        {/* Feedback Box */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📝 Feedback</Text>
          <Text style={styles.cardText}>
            We would love to hear your suggestions.
          </Text>
          <Text style={styles.cardEmail}>feedback@companionplus.com</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home" as never)}
        >
          <Text style={styles.backButtonText}>⬅ Back to Home</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default HelpScreen;

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b1c9e1ff',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },

  subheader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 20,
  },

  scroll: {
    marginTop: 10,
  },

  sectionHeader: {
    fontSize: 26,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
  },

  /* Accordion */
  accordion: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },

  question: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },

  arrow: {
    fontSize: 18,
    color: '#4B5563',
  },

  answer: {
    fontSize: 15,
    backgroundColor: '#E5E7EB',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    color: '#374151',
  },

  /* Cards */
  card: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 6,
    color: '#111827',
  },

  cardText: {
    fontSize: 15,
    color: '#6B7280',
  },

  cardEmail: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#2563EB',
  },

  /* Back Button */
  backButton: {
    marginTop: 30,
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
