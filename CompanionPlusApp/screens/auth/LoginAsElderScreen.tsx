
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

//   const handleLogin = async () => {
//   if (!email || !password) {
//     Alert.alert('Error', 'Please enter email and password');
//     return;
//   }

//   try {
//     const response = await api.post('/auth/login', { email, password });

//     await saveToken(response.data.token);

//     Alert.alert('Success', 'Login successful');
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'ElderHome' as never }],
//     });

//   } catch (error: any) {
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
    const response = await api.post('/auth/login', { email, password });

    await saveToken(response.data.token);

    // ✅ ADD THIS (IMPORTANT)
    await AsyncStorage.setItem('role', 'elder');

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
