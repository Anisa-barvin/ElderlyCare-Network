// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const RoleSelectionScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Choose Your Role</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("LoginAsElder" as never)}
//       >
//         <Text style={styles.buttonText}>Elder</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={[styles.button, styles.caregiverButton]}
//         onPress={() => navigation.navigate("CaregiverLogin" as never)}
//       >
//         <Text style={styles.buttonText}>Caregiver</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default RoleSelectionScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F3F4F6",
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "700",
//     marginBottom: 40,
//     color: "#111827",
//   },
//   button: {
//     width: "80%",
//     backgroundColor: "#4CAF50",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   caregiverButton: {
//     backgroundColor: "#2563EB",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "700",
//   },
// });







import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoleSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Welcome to Companion+</Text>
      <Text style={styles.subtitle}>
        Please choose how you want to continue
      </Text>

      {/* ELDER CARD */}
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('LoginAsElder' as never)}
      >
        <Text style={styles.icon}>👴</Text>
        <Text style={styles.cardTitle}>I am an Elder</Text>
        <Text style={styles.cardSub}>
          Get care, reminders & health support
        </Text>
      </TouchableOpacity>

      {/* CAREGIVER CARD */}
      <TouchableOpacity
        style={[styles.card, styles.caregiverCard]}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('CaregiverLogin' as never)}
      >
        <Text style={styles.icon}>🧑‍⚕️</Text>
        <Text style={styles.cardTitle}>I am a Caregiver</Text>
        <Text style={styles.cardSub}>
          Provide care & manage elder requests
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RoleSelectionScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1c9e1ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1E3A8A',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 40,
    textAlign: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: '#F0F9FF',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  caregiverCard: {
    backgroundColor: '#F0F9FF',
  },

  icon: {
    fontSize: 48,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },

  cardSub: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});



