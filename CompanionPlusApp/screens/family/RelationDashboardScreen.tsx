// // Path: CompanionPlusApp/screens/relation/RelationDashboardScreen.tsx
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const RelationDashboardScreen = () => {
//   const navigation = useNavigation();

//   const handleNavigate = (screen: string) => {
//     navigation.navigate(screen as never);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Welcome to Your Dashboard</Text>

//       <View style={styles.cardContainer}>
//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => handleNavigate('RelationProfile')}
//         >
//           <Text style={styles.cardText}>My Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => handleNavigate('ElderProfile')}
//         >
//           <Text style={styles.cardText}>View Elder Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity              //navigation.navigate('ViewHealthHistoryScreen' as never)
//           style={styles.card}
//           onPress={() => handleNavigate('ViewHealthHistoryScreen')}
//         >
//           <Text style={styles.cardText}>Health Dashboard</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => handleNavigate('RemindersListScreen')}
//         >
//           <Text style={styles.cardText}>Reminders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => handleNavigate('SOSButton')}
//         >
//           <Text style={styles.cardText}>Emergency Alerts</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => handleNavigate('ChatListScreen')}
//         >
//           <Text style={styles.cardText}>Messages</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#F2F4F7',
//     flexGrow: 1,
//   },
//   heading: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#2E3A59',
//     textAlign: 'center',
//   },
//   cardContainer: {
//     flexDirection: 'column',
//     gap: 16,
//   },
//   card: {
//     backgroundColor: '#4CAF50',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 4,
//   },
//   cardText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default RelationDashboardScreen;


// Path: CompanionPlusApp/screens/relation/RelationDashboardScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RelationDashboardScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* TITLE */}
      <Text style={styles.heading}>Relation Dashboard</Text>
      <Text style={styles.subtitle}>
        Manage your Elder’s information with ease
      </Text>

      {/* GRID CARDS */}
      <View style={styles.grid}>
        {renderCard('👤', 'My Profile', 'RelationProfile', handleNavigate)}
        {renderCard('🧓', 'Elder Profile', 'ElderProfile', handleNavigate)}
        {renderCard('❤️', 'Health Dashboard', 'ViewHealthHistoryScreen', handleNavigate)}
        {renderCard('⏰', 'Reminders', 'RemindersListScreen', handleNavigate)}
        {renderCard('🚨', 'Emergency Alerts', 'SOSButton', handleNavigate)}
        {renderCard('💬', 'Messages', 'ChatListScreen', handleNavigate)}
      </View>

    </ScrollView>
  );
};

export default RelationDashboardScreen;

/* ---------- Card Component ---------- */
const renderCard = (
  icon: string,
  title: string,
  screen: string,
  handleNavigate: any
) => (
  <TouchableOpacity
    key={title}
    style={styles.card}
    onPress={() => handleNavigate(screen)}
  >
    <Text style={styles.cardIcon}>{icon}</Text>
    <Text style={styles.cardTitle}>{title}</Text>
  </TouchableOpacity>
);

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#F2F4F7',
    flexGrow: 1,
    alignItems: 'center',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    textAlign: 'center',
  },

  /* GRID DISPLAY (Responsive) */
  grid: {
    width: '100%',
    maxWidth: 600,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },

  /* CARD */
  card: {
    width: '45%',
    minWidth: 150,
    backgroundColor: '#FFFFFF',
    paddingVertical: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    // Shadow (iOS + web)
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },

    // Android
    elevation: 6,

    // Interactive scaling
    transform: [{ scale: 1 }],
  },

  cardIcon: {
    fontSize: 40,
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 18,
    color: '#1F2937',
    fontWeight: '600',
    textAlign: 'center',
  },
});
