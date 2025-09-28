/*
// Path: CompanionPlusApp/screens/auth/LoginAsElderScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginAsElderScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    // Perform login logic here (static data for now)
    navigation.navigate("Home" as never); // Navigate to HomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
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
          <TouchableOpacity onPress={() => navigation.navigate("RegisterAsElder" as never)}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});

export default LoginAsElderScreen;
*/
// Path: CompanionPlusApp/screens/auth/LoginAsElderScreen.tsx
/*
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from '../../utils/api'; // <-- Make sure your baseURL is correctly set here
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';


const LoginAsElderScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
  
    try {
     const response = await api.post('/login', {
      email,
      password,
    });

  console.log("Login Response",response.data);
      // Save the JWT token to AsyncStorage
      await AsyncStorage.setItem('token', response.data.token);
  
      console.log('Login successful:', response.data);
  
      Alert.alert('Success', 'Login successful');
      navigation.navigate('ElderHome' as never); // Navigate to ElderHomeScreen
  
    } catch (error: any) {
      console.log(error.response?.data);
      Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
        <Text style={styles.link} onPress={() => navigation.navigate("RegisterAsElder" as never)}>
          Register
        </Text>
      </Text>
    </View>
    </View>


  );
};

export default LoginAsElderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333',
  },
  input: {
    width: '100%', padding: 10, marginBottom: 15, borderWidth: 1,
    borderRadius: 5, borderColor: '#ddd', backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50', padding: 12, borderRadius: 5, width: '100%', alignItems: 'center',
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});
*/


import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api'; // ✅ use only your api instance

const LoginAsElderScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      // ✅ Corrected endpoint
      const response = await api.post('/auth/login', { email, password });

      console.log('Login Response:', response.data);

      // ✅ Save JWT token
      await AsyncStorage.setItem('token', response.data.token);

      Alert.alert('Success', 'Login successful');
      navigation.navigate('ElderHome' as never); // Navigate to ElderHomeScreen
    } catch (error: any) {
      console.log('Login Error:', error.response?.data);
      Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don&apos;t have an account?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('RegisterAsElder' as never)}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginAsElderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  link: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
});
