
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const CaregiverHomeScreen: React.FC = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       {/* HEADER */}
//       <View style={styles.headerRow}>
//         <View>
//           <Text style={styles.welcome}>Welcome 👋</Text>
//           <Text style={styles.name}>Caregiver Dashboard</Text>
//         </View>

//         {/* Notification */}
//         <TouchableOpacity
//           style={styles.notification}
//           onPress={() => navigation.navigate('Notifications' as never)}
//         >
//           <Text style={styles.notificationIcon}>🔔</Text>
//         </TouchableOpacity>
//       </View>

//       {/* WELCOME CARD */}
//       <View style={styles.welcomeCard}>
//         <Text style={styles.cardTitle}>Your Care Journey</Text>
//         <Text style={styles.cardSubtitle}>
//           Manage your profile, bookings, and elder care tasks in one place.
//         </Text>
//       </View>

//       {/* ACTION CARDS */}
//       <View style={styles.grid}>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('CaregiverProfile' as never)}
//         >
//           <Text style={styles.cardIcon}>👤</Text>
//           <Text style={styles.cardText}>My Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('SearchElders' as never)}
//         >
//           <Text style={styles.cardIcon}>🔍</Text>
//           <Text style={styles.cardText}>Search Elders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('CaregiverBookings' as never)}
//         >
//           <Text style={styles.cardIcon}>📅</Text>
//           <Text style={styles.cardText}>My Bookings</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('SettingsScreen' as never)}
//         >
//           <Text style={styles.cardIcon}>⚙️</Text>
//           <Text style={styles.cardText}>Settings</Text>
//         </TouchableOpacity>

//       </View>

//     </ScrollView>
//   );
// };

// export default CaregiverHomeScreen;

// /* ===================== STYLES ===================== */

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#F3F4F6',
//   },

//   /* HEADER */
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },

//   welcome: {
//     fontSize: 18,
//     color: '#6B7280',
//   },

//   name: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#111827',
//   },

//   notification: {
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderRadius: 50,
//     elevation: 4,
//   },

//   notificationIcon: {
//     fontSize: 22,
//   },

//   /* WELCOME CARD */
//   welcomeCard: {
//     backgroundColor: '#2563EB',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 25,
//   },

//   cardTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 6,
//   },

//   cardSubtitle: {
//     fontSize: 14,
//     color: '#E0E7FF',
//   },

//   /* GRID */
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },

//   card: {
//     width: '48%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingVertical: 25,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//     marginBottom: 15,

//     elevation: 4,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 6 },
//     shadowRadius: 10,
//   },

//   cardIcon: {
//     fontSize: 30,
//     marginBottom: 10,
//   },

//   cardText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#1F2937',
//   },
// });



// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const CaregiverHomeScreen: React.FC = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       {/* HEADER */}
//       <View style={styles.headerRow}>
//         <View>
//           <Text style={styles.welcome}>Welcome 👋</Text>
//           <Text style={styles.name}>Caregiver Dashboard</Text>
//         </View>

//         {/* Notification */}
//         <TouchableOpacity
//           style={styles.notification}
//           onPress={() => navigation.navigate('Notifications' as never)}
//         >
//           <Text style={styles.notificationIcon}>🔔</Text>
//         </TouchableOpacity>
//       </View>

//       {/* INFO CARD */}
//       <View style={styles.infoCard}>
//         <Text style={styles.infoTitle}>Your Care Journey</Text>
//         <Text style={styles.infoText}>
//           Manage your profile, bookings and elder requests.
//         </Text>
//       </View>

//       {/* ACTION GRID */}
//       <View style={styles.grid}>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('CaregiverProfile' as never)}
//         >
//           <Text style={styles.icon}>👤</Text>
//           <Text style={styles.cardText}>My Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('SearchElders' as never)}
//         >
//           <Text style={styles.icon}>🔍</Text>
//           <Text style={styles.cardText}>Search Elders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('CaregiverBookings' as never)}
//         >
//           <Text style={styles.icon}>📅</Text>
//           <Text style={styles.cardText}>My Bookings</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate('SettingsScreen' as never)}
//         >
//           <Text style={styles.icon}>⚙️</Text>
//           <Text style={styles.cardText}>Settings</Text>
//         </TouchableOpacity>

//       </View>

//     </ScrollView>
//   );
// };

// export default CaregiverHomeScreen;

// /* ===================== STYLES ===================== */

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#F3F4F6',
//     alignItems: 'center',
//   },

//   /* HEADER */
//   headerRow: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 18,
//   },

//   welcome: {
//     fontSize: 16,
//     color: '#6B7280',
//   },

//   name: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#111827',
//   },

//   notification: {
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderRadius: 50,
//     elevation: 4,
//   },

//   notificationIcon: {
//     fontSize: 22,
//   },

//   /* INFO CARD */
//   infoCard: {
//     width: '92%',
//     backgroundColor: '#2563EB',
//     borderRadius: 16,
//     padding: 18,
//     marginBottom: 25,
//   },

//   infoTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 6,
//   },

//   infoText: {
//     fontSize: 14,
//     color: '#E0E7FF',
//   },

//   /* GRID */
//   grid: {
//     width: '100%',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//   },

//   card: {
//     width: '44%',              // ✅ Rectangle (not full width)
//     backgroundColor: '#FFFFFF',
//     borderRadius: 14,
//     paddingVertical: 22,
//     alignItems: 'center',
//     marginBottom: 18,

//     elevation: 4,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 6 },
//     shadowRadius: 10,
//   },

//   icon: {
//     fontSize: 28,
//     marginBottom: 10,
//   },

//   cardText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#1F2937',
//   },
// });



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CaregiverHomeScreen = () => {
  const navigation = useNavigation();

  const Card = ({
    title,
    icon,
    onPress,
  }: {
    title: string;
    icon: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.cardText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
 <View style={styles.infoCard}>
       <Text style={styles.infoTitle}>Your Care Journey</Text>
         <Text style={styles.infoText}>
          Manage your profile, bookings and elder requests.
        </Text>
       </View>

      <Text style={styles.heading}>Caregiver Dashboard</Text>
      <Text style={styles.subheading}>
        Manage your caregiving activities with ease
      </Text>

      {/* GRID */}
      <View style={styles.grid}>
        <Card
          title="My Profile"
          icon="👤"
          onPress={() => navigation.navigate('CaregiverProfile' as never)}
        />
          
        <Card
          title="Settings"
          icon="⚙️"
          onPress={() => navigation.navigate('Settings' as never)}
        />

        <Card
          title="Notifications"
          icon="🔔"
          onPress={() => navigation.navigate('CaregiverNotifications' as never)}
        />
      </View>
    </ScrollView>
  );
};

export default CaregiverHomeScreen;
/* ===================== STYLES ===================== */


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
    paddingVertical: 30,
  },

  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },

  subheading: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 28,
  },

  /* INFO CARD */
  infoCard: {
    width: '92%',
    backgroundColor: '#2563EB',
    borderRadius: 16,
    padding: 18,
    marginBottom: 25,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },

  infoText: {
    fontSize: 14,
    color: '#E0E7FF',
  },
  grid: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 18,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 5,
  },

  icon: {
    fontSize: 34,
    marginBottom: 12,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
});
