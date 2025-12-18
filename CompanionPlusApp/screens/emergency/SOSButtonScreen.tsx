// // Path: CompanionPlusApp/screens/emergency/SOSButtonScreen.tsx

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// import * as Location from 'expo-location';
// import axios from '../../utils/api';

// const SOSButtonScreen = () => {
//   const [sending, setSending] = useState(false);

//   const sendSOSAlert = async () => {
//     try {
//       setSending(true);

//       // Request location permission
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Denied', 'Location permission is required to send an SOS alert.');
//         setSending(false);
//         return;
//       }

//       // Get current location
//       const location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;

//       // Send alert to the backend
//       await axios.post('/sos/alert', {
//         latitude,
//         longitude,
//       });

//       Alert.alert('SOS Sent', 'Your emergency alert has been sent successfully.');
//     } catch (error) {
//       console.error('Error sending SOS:', error);
//       Alert.alert('Error', 'Failed to send SOS alert.');
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Emergency SOS</Text>
//       <Text style={styles.description}>
//         If you are in danger or need immediate help, press the button below to send an emergency alert.
//       </Text>
//       <TouchableOpacity
//         style={[styles.sosButton, sending && { backgroundColor: '#ccc' }]}
//         onPress={sendSOSAlert}
//         disabled={sending}
//       >
//         {sending ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.sosText}>Send SOS</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFEDED',
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#D00000',
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   sosButton: {
//     backgroundColor: '#D00000',
//     paddingVertical: 20,
//     paddingHorizontal: 60,
//     borderRadius: 100,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 6,
//   },
//   sosText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default SOSButtonScreen;



// Path: CompanionPlusApp/screens/emergency/SOSButtonScreen.tsx

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Animated,
} from 'react-native';
import * as Location from 'expo-location';
import axios from '../../utils/api';

const SOSButtonScreen = () => {
  const [sending, setSending] = useState(false);

  // 🔴 Pulse Animation
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const sendSOSAlert = async () => {
    try {
      setSending(true);

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        setSending(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      await axios.post('/sos/alert', { latitude, longitude });

      Alert.alert('SOS Sent', 'Emergency contacts notified.');
    } catch (error) {
      console.error('Error sending SOS:', error);
      Alert.alert('Error', 'Unable to send SOS alert');
    } finally {
      setSending(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>🚨 Emergency SOS</Text>
      <Text style={styles.description}>
        Press the SOS button below to instantly send your location to your emergency contacts.
      </Text>

      {/* Pulse Animated Button */}
      <Animated.View style={[styles.pulseCircle, { transform: [{ scale: pulseAnim }] }]} />

      <TouchableOpacity
        style={[styles.sosButton, sending && { backgroundColor: '#999' }]}
        onPress={sendSOSAlert}
        disabled={sending}
      >
        {sending ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text style={styles.sosText}>SOS</Text>
        )}
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>Your location will be sent immediately.</Text>
    </View>
  );
};

export default SOSButtonScreen;

/* =========================== STYLES =========================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B00000',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    width: '80%',
    marginBottom: 40,
  },

  /* Glowing Pulse Circle */
  pulseCircle: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(255,0,0,0.15)',
  },

  sosButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#D00000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,

    shadowColor: '#D00000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },

  sosText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },

  footerText: {
    fontSize: 14,
    color: '#444',
    marginTop: 40,
  },
});
