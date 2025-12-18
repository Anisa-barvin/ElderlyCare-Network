

// import React, { useState } from 'react';
// import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api'; // ✅ use only your api instance

// const LoginAsElderScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter email and password');
//       return;
//     }

//     try {
//       // ✅ Corrected endpoint
//       const response = await api.post('/auth/login', { email, password });

//       console.log('Login Response:', response.data);

//       // ✅ Save JWT token
//       await AsyncStorage.setItem('token', response.data.token);

//       Alert.alert('Success', 'Login successful');
//       navigation.navigate('ElderHome' as never); // Navigate to ElderHomeScreen
//     } catch (error: any) {
//       console.log('Login Error:', error.response?.data);
//       Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           Don&apos;t have an account?{' '}
//           <Text
//             style={styles.link}
//             onPress={() => navigation.navigate('RegisterAsElder' as never)}
//           >
//             Register
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default LoginAsElderScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f2f2f2',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#ddd',
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 12,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   footerText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   link: {
//     color: '#0066cc',
//     fontWeight: 'bold',
//   },
// });








// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../utils/api';

// const LoginAsElderScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter email and password');
//       return;
//     }

//     try {
//       const response = await api.post('/auth/login', { email, password });
//       console.log('Login Response:', response.data);

//       await AsyncStorage.setItem('token', response.data.token);
        
//       Alert.alert('Success', 'Login successful');

      
//       navigation.navigate('ElderHome' as never);
//     } catch (error: any) {
//       console.log('Login Error:', error.response?.data);
//       Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <View style={styles.container}>

//       {/* Card */}
//       <View style={styles.card}>
//         <Text style={styles.title}>Welcome Back 👋</Text>
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
//               onPress={() => navigation.navigate('RegisterAsElder' as never)}
//             >
//               Register
//             </Text>
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default LoginAsElderScreen;

// /* ==================== STYLES ===================== */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//     // Modern gradient background
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
//     backgroundColor: '#4CAF50',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',

//     // Button shadow for depth
//     shadowColor: '#4CAF50',
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






// import { saveToken } from '../../utils/storage';

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

// const LoginAsElderScreen = () => {
//   const navigation = useNavigation<any>();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter email and password');
//       return;
//     }

//     try {
//       const response = await api.post('/auth/login', {
//         email,
//         password,
//       });

//       // ✅ SAVE TOKEN
//       await AsyncStorage.setItem('token', response.data.token);

//       Alert.alert('Success', 'Login successful');

//       // ✅ IMPORTANT: RESET STACK
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'ElderHome' }],
//       });

//     } catch (error: any) {
//       Alert.alert(
//         'Login Failed',
//         error.response?.data?.message || 'Something went wrong'
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Welcome Back 👋</Text>
//         <Text style={styles.subtitle}>Login to continue</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           autoCapitalize="none"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <View style={styles.footer}>
//           <Text style={styles.footerText}>
//             Don't have an account?{' '}
//             <Text
//               style={styles.link}
//               onPress={() => navigation.navigate('RegisterAsElder')}
//             >
//               Register
//             </Text>
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default LoginAsElderScreen;

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
//     backgroundColor: '#FFFFFF',
//     padding: 25,
//     borderRadius: 20,
//     elevation: 10,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },

//   subtitle: {
//     fontSize: 15,
//     textAlign: 'center',
//     marginBottom: 25,
//     color: '#6B7280',
//   },

//   input: {
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#D1D5DB',
//     marginBottom: 15,
//   },

//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
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
//   },

//   link: {
//     color: '#2563EB',
//     fontWeight: 'bold',
//   },
// });





import { saveToken } from '../../utils/storage';

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

const LoginAsElderScreen = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter email and password');
    return;
  }

  try {
    const response = await api.post('/auth/login', { email, password });

    await saveToken(response.data.token);

    Alert.alert('Success', 'Login successful');
    navigation.reset({
      index: 0,
      routes: [{ name: 'ElderHome' as never }],
    });

  } catch (error: any) {
    Alert.alert(
      'Login Failed',
      error.response?.data?.message || 'Something went wrong'
    );
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('RegisterAsElder')}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginAsElderScreen;

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
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    elevation: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 25,
    color: '#6B7280',
  },

  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D1D5DB',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
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
  },

  link: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
});
