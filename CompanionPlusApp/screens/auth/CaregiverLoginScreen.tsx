// // Path: CompanionPlusApp/screens/auth/CaregiverLoginScreen.tsx

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api';

// const CaregiverLoginScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter email and password');
//       return;
//     }

//     try {
//       const response = await api.post('/caregiver/login', { email, password });

//       console.log('Login Response:', response.data);

//       await AsyncStorage.setItem('token', response.data.token);

//       Alert.alert('Success', 'Login successful');
//       navigation.navigate('CaregiverHome' as never);

//     } catch (error: any) {
//       console.log('Login Error:', error.response?.data);
//       Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <View style={styles.container}>

//       {/* Card */}
//       <View style={styles.card}>
//         <Text style={styles.title}>Welcome Caregiver 👋</Text>
//         <Text style={styles.subtitle}>Login to continue</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#888"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#888"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         {/* Footer */}
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>
//             Don't have an account?{' '}
//             <Text
//               style={styles.link}
//               onPress={() => navigation.navigate('CaregiverRegister' as never)}
//             >
//               Register
//             </Text>
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default CaregiverLoginScreen;

// /* ==================== STYLES ===================== */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F8FAFC',
//     padding: 20,
//   },

//   card: {
//     width: '100%',
//     maxWidth: 400,
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     padding: 25,
//     borderRadius: 20,

//     // Glass effect
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.15,
//     shadowRadius: 10,
//     elevation: 10,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#111827',
//     textAlign: 'center',
//     marginBottom: 5,
//   },

//   subtitle: {
//     fontSize: 15,
//     color: '#6B7280',
//     textAlign: 'center',
//     marginBottom: 25,
//   },

//   input: {
//     width: '100%',
//     padding: 12,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#D1D5DB',
//     backgroundColor: '#F9FAFB',
//     fontSize: 16,
//   },

//   button: {
//     backgroundColor: '#2563EB',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',

//     shadowColor: '#2563EB',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },

//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 17,
//     fontWeight: 'bold',
//   },

//   footer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },

//   footerText: {
//     fontSize: 15,
//     color: '#374151',
//   },

//   link: {
//     color: '#2563EB',
//     fontWeight: 'bold',
//   },
// });



// Path: CompanionPlusApp/screens/auth/CaregiverLoginScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
interface CaregiverLoginResponse {
  token: string;
  caregiver: {
    _id: string;
    name: string;
    email: string;
  };
}

const CaregiverLoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* ================= HANDLE LOGIN ================= */
  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Please enter email and password');
  //     return;
  //   }

  //   try {
  //     const response = await api.post('/caregiver/login', { email, password });

  //     console.log('Login Response:', response.data);

  //     await AsyncStorage.setItem('token', response.data.token);

  //     // ✅ STORE CAREGIVER ID (THIS FIXES NOTIFICATION ISSUE)
  //     await AsyncStorage.setItem(
  //       'caregiverId',
  //       response.data.caregiver._id
  //     );

  //     Alert.alert('Success', 'Login successful');
  //     navigation.navigate('CaregiverHome' as never);

  //   } catch (error: any) {
  //     console.log('Login Error:', error.response?.data);
  //     Alert.alert(
  //       'Login Failed',
  //       error.response?.data?.message || 'Something went wrong'
  //     );
  //   }
  // };

  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter email and password');
    return;
  }

  try {
    const response = await api.post<CaregiverLoginResponse>(
      '/caregiver/login',
      { email, password }
    );

    // ✅ NOW TYPESCRIPT KNOWS response.data
    await AsyncStorage.setItem('token', response.data.token);
    await AsyncStorage.setItem('caregiverId', response.data.caregiver._id);

    Alert.alert('Success', 'Login successful');
    navigation.navigate('CaregiverHome' as never);

  } catch (error: any) {
    console.log('Login Error:', error.response?.data);
    Alert.alert(
      'Login Failed',
      error.response?.data?.message || 'Something went wrong'
    );
  }
};


  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Caregiver 👋</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* Password */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('CaregiverRegister' as never)}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CaregiverLoginScreen;

/* ==================== STYLES ===================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 25,
    borderRadius: 20,

    // Glass-like shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D1D5DB',
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',

    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 20,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 15,
    color: '#374151',
  },

  link: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
});
